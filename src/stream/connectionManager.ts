const WebSocketClient = require("ws");
const { WEBSOCKET_CONNECTION_STATES } = require("../constants");
const { signParams } = require("../utils");

class WebSocket {
	url: string;
	onConnect: () => void;
	client: typeof WebSocketClient;

	callbackMapping: {
		[index: number]: ((value: unknown) => any) | undefined;
	};
	updateMapping: {
		[index: string]: ((value: unknown) => any) | undefined;
	};
	isConnected = false;
	isAuthorized = false;

	constructor(
		url: string,
		{ apiKey, apiSecret }: { apiKey?: string; apiSecret?: string } = {},
		onConnect: () => void
	) {
		const $this = this;
		this.url = url;
		this.onConnect = onConnect;
		this.callbackMapping = {};
		this.updateMapping = {};
		this.client = new WebSocketClient(url);
		this.client.on(WEBSOCKET_CONNECTION_STATES.OPEN, function webSocketConnectionOpened() {
			$this.onConnection(apiKey, apiSecret);
		});
		this.client.on(WEBSOCKET_CONNECTION_STATES.MESSAGE, function message(message: string) {
			$this.onMessage(message);
		});
	}

	onConnection(apiKey?: string, apiSecret?: string) {
		this.isConnected = true;
		this.authorize(apiKey, apiSecret);
	}

	onAuthorized() {
		this.isAuthorized = true;
		this.onConnect();
	}

	generateUniqueId() {
		let id;
		do {
			id = Math.floor(Math.random() * 10000 + 1);
		} while (id in this.callbackMapping);
		return id;
	}

	async authorize(apiKey?: string, apiSecret?: string) {
		const tonce = Date.now(),
			type = this.url == "wss://perpetual.coinex.com/" ? "sha256" : "md5";
		const result = await this.send({
			method: "server.sign",
			params: [apiKey, signParams(apiSecret, { access_id: apiKey, tonce }, type), tonce],
		});
		if (result && result.status == "success") this.onAuthorized();
	}

	onMessage(message: string | { method: string; id: number; params?: []; result?: [] }) {
		let parsedMessage: { method: string; id: number; params?: []; result?: [] };

		if (typeof message === "string") {
			parsedMessage = JSON.parse(message);
		} else {
			parsedMessage = message;
		}

		const { method, id } = parsedMessage,
			responseCallback = id ? this.callbackMapping[id] : null,
			responseUpdate = method ? this.updateMapping[method] : null;
		if (!parsedMessage) return;
		if (responseUpdate) {
			responseUpdate(parsedMessage.params);
		} else if (responseCallback) {
			responseCallback(parsedMessage.result);
			delete this.callbackMapping[id];
		}
	}

	send(data: {}, onUpdateMethod?: string, onUpdate?: (value: unknown)=>any): any {
		const $this = this,
			requestMethod = onUpdateMethod && onUpdate ? onUpdateMethod : null,
			requestId = this.generateUniqueId();

		data = {
			...data,
			id: requestId
		}
		const stringifiedData = typeof data === "object" ? JSON.stringify(data) : data;
		this.client.send(stringifiedData);
		return new Promise((resolve) => {
			if (requestMethod) {
				$this.updateMapping[requestMethod] = onUpdate;
				$this.callbackMapping[requestId] = resolve;
			} else if (requestId) $this.callbackMapping[requestId] = resolve;
		});
	}
}

module.exports = WebSocket;
