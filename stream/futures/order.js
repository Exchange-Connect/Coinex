const { connections } = require("../connections");
const methodBaseName = "order";
const methodId = 15;

module.exports.subscribe = function (markets, onData) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = markets,
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

module.exports.query = function (market, side, offset, limit) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, side, offset, limit],
		id = methodId;
	client.send({ method, params, id });
};

module.exports.queryStop = function (market, side, offset, limit) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query_stop`,
		params = [market, side, offset, limit],
		id = methodId;
	client.send({ method, params, id });
};