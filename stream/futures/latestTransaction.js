const { connections } = require("../connections");
const methodBaseName = "kline";
const methodId = 16;

module.exports.subscribe = function (onData) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = "deals.update",
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

module.exports.query = function (market, limit, last_id) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, limit, last_id],
		id = methodId;
	client.send({ method, params, id });
};

module.exports.queryUser = function (market, side, start_time, end_time, offset, limit) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query_user`,
		params = [market, side, start_time, end_time, offset, limit],
		id = methodId;
	client.send({ method, params, id });
};