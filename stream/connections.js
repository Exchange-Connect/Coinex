const WebSocket = require("./connectionManager");

const connectionPool = {};
const connections = [];

async function initialize({ apiKey = undefined, apiSecret = undefined } = {}, endpoints) {
	for (const endpoint of endpoints) {
		const { name, url } = endpoint;
		let onConnectCallback;
		connections.push(
			new Promise((resolve) => {
				onConnectCallback = resolve;
			})
		);
		connectionPool[name] = new WebSocket(url, { apiKey, apiSecret }, onConnectCallback);
	}
	return new Promise((resolve) => {
		Promise.all(connections).then(() => {
			resolve("All of the Sockets are Connected");
		});
	});
}

module.exports = {
	initialize,
	connections: connectionPool,
};
