const WebSocketClient = require("ws");
const { WEBSOCKET_CONNECTION_STATES } = require("@root/src/constants/index");

class WebSocket {
	isConnected = false;

	constructor(url) {
		const $this = this;
		this.url = url;
		this.client = new WebSocketClient(url);
		this.client.on(WEBSOCKET_CONNECTION_STATES.OPEN, function webSocketConnectionOpened() {
			$this.connectionOpened();
		});
		this.client.on(WEBSOCKET_CONNECTION_STATES.MESSAGE, function message(message) {
			$this.connectionIncommingMessage(message);
		});
	}

	connectionOpened() {
		this.isConnected = true;
	}

	connectionIncommingMessage(message) {
		console.log(message);
	}

	send(data) {
		let convertedData = data;

		if (typeof data === "object") {
			convertedData = JSON.stringify(data);
		}
		this.client.send(convertedData);
	}
}

module.exports = WebSocket;
