/**
 * klines' Realtime Data
 * @namespace Streams.futures.kline
 */

const { connections } = require("../connections");
const methodBaseName = "kline";
const methodId = 5;

/**
 * Subscribe to Klines' Realtime Data
 * @async
 * @function subscribe
 * @memberof Streams.futures.kline
 * @param {String} market Market Name
 * @param {"1min"|"5min"|"15min"|"30min"|"1hour"|"2hour"|"4hour"|"6hour"|"12hour"|"1day"|"3day"|"1week"} period Period
 * @param {function} onData On Data Incomming Callback
 */
export function futuresKlineSubscribe(
	market: string,
	period:
		| "1min"
		| "5min"
		| "15min"
		| "30min"
		| "1hour"
		| "2hour"
		| "4hour"
		| "6hour"
		| "12hour"
		| "1day"
		| "3day"
		| "1week",
	onData: () => any
) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = [market, period],
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Klines' Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.futures.kline
 */
export function futuresKlineUnsubscribe() {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params: [] = [],
		id = methodId;
	client.send({ method, params, id });
}

/**
 * Query the Klines' Data on specific market
 * @async
 * @function query
 * @memberof Streams.futures.kline
 * @param {String} market Market name
 * @param {"1min"|"5min"|"15min"|"30min"|"1hour"|"2hour"|"4hour"|"6hour"|"12hour"|"1day"|"3day"|"1week"} period Period
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function futuresKlineQuery(
	market: string,
	period:
		| "1min"
		| "5min"
		| "15min"
		| "30min"
		| "1hour"
		| "2hour"
		| "4hour"
		| "6hour"
		| "12hour"
		| "1day"
		| "3day"
		| "1week"
) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, period],
		id = methodId;
	return await client.send({ method, params, id });
}
