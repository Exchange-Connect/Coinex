const WebSocketClient = require("ws");
const { WEBSOCKET_CONNECTION_STATES } = require("../constants");
const { signParams } = require("../utils");

class WebSocket {
	isConnected = false;

	constructor(url, { apiKey, apiSecret } = {}, onConnect) {
		const $this = this;
		this.url = url;
		this.onConnect = onConnect;
		this.callbackMapping = {};
		this.updateMapping = {};
		this.client = new WebSocketClient(url);
		this.client.on(WEBSOCKET_CONNECTION_STATES.OPEN, function webSocketConnectionOpened() {
			$this.onConnection(apiKey, apiSecret);
		});
		this.client.on(WEBSOCKET_CONNECTION_STATES.MESSAGE, function message(message) {
			$this.onMessage(message);
		});
	}

	onConnection(apiKey, apiSecret) {
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

	async authorize(apiKey, apiSecret) {
		const tonce = Date.now(),
			type = this.url == "wss://perpetual.coinex.com/" ? "sha256" : "md5";
		const result = await this.send({
			method: "server.sign",
			params: [apiKey, signParams(apiSecret, { access_id: apiKey, tonce }, type), tonce],
		});
		if (result && result.status == "success") this.onAuthorized();
	}

	onMessage(message) {
		const data = JSON.parse(message),
			{ method, id } = data,
			responseCallback = id ? this.callbackMapping[id] : null,
			responseUpdate = method ? this.updateMapping[method] : null;
		if (!data) return;
		if (responseUpdate) {
			responseUpdate(data.params);
		} else if (responseCallback) {
			responseCallback(data.result);
			delete this.callbackMapping[id];
		}
	}

	send(data, onUpdateMethod, onUpdate) {
		const $this = this,
			requestMethod = onUpdateMethod && onUpdate ? onUpdateMethod : null,
			requestId = this.generateUniqueId();
		data.id = requestId;
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
