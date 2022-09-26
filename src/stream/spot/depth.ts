/**
 * Assets' Realtime Data
 * @namespace Streams.spot.depth
 */
const { connections } = require("../connections");
const methodBaseName = "depth";

/**
 * Subscribe to Market Depth Realtime Data
 * @async
 * @function subscribe
 * @memberof Streams.spot.depth
 * @param {Array<Object>|Object} markets Market(s) Name ( Would subscribe on one or multi market(s) depending on the parameter)
 * @param {function} onData On Data Incomming Callback
 */
export async function depthSubscribe(
	markets:
		| { market: string; limit: string; interval: string; diff: string }[]
		| { market: string; limit: string; interval: string; diff: string },
	onData: () => any
) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	let method, params;
	const onUpdateMethod = `${methodBaseName}.update`;

	if (Array.isArray(markets)) {
		method = `${methodBaseName}.subscribe_multi`;
		params = markets.map((market) => [market.market, market.limit, market.interval, market.diff]);
	} else {
		method = `${methodBaseName}.subscribe`;
		params = [markets.market, markets.limit, markets.interval, markets.diff];
	}

	return await client.send({ method, params }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Market Depth Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.spot.depth
 */
export async function depthUnsubscribe() {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params: [] = [];
	return await client.send({ method, params });
}

/**
 * Unsubscribe from Multi-Market Depth Realtime Data
 * @async
 * @function unsubscribeMulti
 * @memberof Streams.spot.depth
 */
export async function depthUnsubscribeMulti() {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe_multi`,
		params: [] = [];
	return await client.send({ method, params });
}

/**
 * Query the Market Depth' Data on specific market
 * @async
 * @function query
 * @memberof Streams.spot.depth
 * @param {String} market Market name
 * @param {5|10|20|50|100} limit Number of records obtained
 * @param {"0.1"|"0.01"|"0"|"1"|"10"} interval Market depth aggregation level
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function depthQuery(
	market: string,
	limit: 5 | 10 | 20 | 50 | 100,
	interval: "0.1" | "0.01" | "0" | "1" | "10"
) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, limit, interval];
	return await client.send({ method, params });
}
