const { connections } = require("../connections");
const methodBaseName = "state";
const methodId = 15;

module.exports.subscribe = function (onData) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = "state.update",
		params = ["BTCUSD"],
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
};

module.exports.unsubscribe = function () {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params = [],
		id = methodId;
	client.send({ method, params, id });
};

module.exports.query = function () {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = ["BTCUSD", 86400],
		id = methodId;
	client.send({ method, params, id });
};
