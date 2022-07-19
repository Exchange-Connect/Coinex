const { connections } = require("../connections");

module.exports.subscribe = function (markets, onData) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	let method, params;
	const onUpdateMethod = "depth.update",
		id = 15;

	if (Array.isArray(markets)) {
		method = "depth.subscribe_multi";
		params = markets.map((market) => [market.market, market.limit, market.interval, market.diff]);
	} else {
		method = "depth.subscribe";
		params = [markets.market, markets.limit, markets.interval, markets.diff];
	}

	client.send({ method, params, id }, onUpdateMethod, onData);
};

module.exports.unsubscribe = function () {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = "depth.unsubscribe",
		params = [],
		id = 15;
	client.send({ method, params, id });
};

module.exports.unsubscribeMulti = function () {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = "depth.unsubscribe_multi",
		params = [],
		id = 15;
	client.send({ method, params, id });
};

module.exports.query = function (market, limit, interval) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = "state.query",
		params = [market, limit, interval],
		id = 15;
	client.send({ method, params, id });
};
