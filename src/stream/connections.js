const WebSocket = require("./connectionManager");

const connectionPool = {};

async function initialize(endpoints) {
	for (const endpoint of endpoints) {
		const { name, url } = endpoint;
		connectionPool[name] = new WebSocket(url);
	}
}

module.exports = {
	initialize,
	connections: connectionPool,
};
