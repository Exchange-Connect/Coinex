const WebSocket = require("./connectionManager");

const connectionPool: {
	[index: string]: typeof WebSocket
} = {};
const connections: Promise<void>[] = [];

async function initialize(
	{ apiKey = undefined, apiSecret = undefined } = {},
	endpoints: { name: string; url: string }[]
): Promise<string> {
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
