/**
 * Assets' Realtime Data
 * @namespace Streams.futures.depth
 */
const { connections } = require("../connections");
const methodBaseName = "depth";
const methodId = 15;

/**
 * Subscribe to Market Depth Realtime Data
 * @async
 * @function subscribe
 * @memberof Streams.futures.depth
 * @param {String|Array<String>} markets Market(s) Name ( Would subscribe on one or multi market(s) depending on the parameter)
 * @param {Function<Object>} onData On Data Incomming Callback
 */
module.exports.subscribe = function (markets, onData) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	let method, params;
	const onUpdateMethod = `${methodBaseName}.update`,
		id = methodId;

	if (Array.isArray(markets)) {
		method = `${methodBaseName}.subscribe_multi`;
		params = markets.map((market) => [market.market, market.limit, market.interval, market.diff]);
	} else {
		method = `${methodBaseName}.subscribe`;
		params = [markets.market, markets.limit, markets.interval, markets.diff];
	}

	client.send({ method, params, id }, onUpdateMethod, onData);
};

/**
 * Unsubscribe from Market Depth Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.futures.depth
 */
module.exports.unsubscribe = function () {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params = [],
		id = methodId;
	client.send({ method, params, id });
};

/**
 * Unsubscribe from Multi-Market Depth Realtime Data
 * @async
 * @function unsubscribeMulti
 * @memberof Streams.futures.depth
 */
module.exports.unsubscribeMulti = function () {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe_multi`,
		params = [],
		id = methodId;
	client.send({ method, params, id });
};

/**
 * Query the Market Depth' Data on specific market
 * @async
 * @function query
 * @memberof Streams.futures.depth
 * @param {String} market Market name
 * @param {5|10|20|50|100} limit Number of records obtained
 * @param {"10"|"1"|"0"|"0.1"|"0.01"} interval Market depth aggregation level
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.query = function (market, limit, interval) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, limit, interval],
		id = methodId;
	client.send({ method, params, id });
};
