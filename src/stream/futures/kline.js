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
 * @param {Function<Object>} onData On Data Incomming Callback
 */
module.exports.subscribe = function (market, period, onData) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = [market, period],
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
};

/**
 * Unsubscribe from Klines' Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.futures.kline
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
 * Query the Klines' Data on specific market
 * @async
 * @function query
 * @memberof Streams.futures.kline
 * @param {String} market Market name
 * @param {"1min"|"5min"|"15min"|"30min"|"1hour"|"2hour"|"4hour"|"6hour"|"12hour"|"1day"|"3day"|"1week"} period Period
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.query = function (market, period) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, period],
		id = methodId;
	client.send({ method, params, id });
};
