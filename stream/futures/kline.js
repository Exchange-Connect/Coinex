const { connections } = require("../connections");
const methodBaseName = "kline";
const methodId = 5;

module.exports.subscribe = function (market, period, onData) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = [market, period],
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

module.exports.query = function (market, period) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, period],
		id = methodId;
	client.send({ method, params, id });
};
