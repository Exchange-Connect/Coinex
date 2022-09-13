/**
 * klines' Realtime Data
 * @namespace Streams.spot.kline
 */

const { connections } = require("../connections");
const methodBaseName = "kline";

/**
 * Query the Klines' Data on specific market
 * @async
 * @function query
 * @memberof Streams.spot.kline
 * @param {String} market Market name
 * @param {Number} start_time Start time
 * @param {Number} end_time End time
 * @param {"1min"|"5min"|"15min"|"30min"|"1hour"|"2hour"|"4hour"|"6hour"|"12hour"|"1day"|"3day"|"1week"} period Period
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
async function query(market, start_time, end_time, period) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, start_time, end_time, period];
	return await client.send({ method, params });
}

module.exports = {
	query,
};
