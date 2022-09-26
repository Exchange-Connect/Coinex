/**
 * Latest Transactions' Realtime Data
 * @namespace Streams.spot.latestTransaction
 */

const { connections } = require("../connections");
const methodBaseName = "deals";
const methodId = 16;

/**
 * Subscribe to Latest Transactions Realtime Data on Specific Market
 * @async
 * @function subscribe
 * @memberof Streams.spot.latestTransaction
 * @param {String} market Market Name
 * @param {function} onData On Data Incomming Callback
 */
export function latestTransactionSubscribe(market: string, onData: () => any) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = "deals.update",
		params = [market],
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Latest Transactions Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.spot.latestTransaction
 */
export function latestTransactionUnsubscribe() {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params: [] = [],
		id = methodId;
	client.send({ method, params, id });
}

/**
 * Query the Latest Transactions' Data on specific market
 * @async
 * @function query
 * @memberof Streams.spot.latestTransaction
 * @param {String} market Market Name
 * @param {Number} limit The number of records obtained
 * @param {Number} last_id The largest ID of the last returned result
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function latestTransactionQuery(market: string, limit: number, last_id: number) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, limit, last_id],
		id = methodId;
	return await client.send({ method, params, id });
}

/**
 * Query the Assets' Data on specific market and account
 * @async
 * @function queryUser
 * @memberof Streams.spot.latestTransaction
 * @param {Number} account Account ID
 * @param {String} market Market Name
 * @param {0|1|2} side Transaction Direction (0: all, 1: sell, 2: buy)
 * @param {Number} start_time Start time (0: no limit)
 * @param {Number} end_time End time (0: no limit)
 * @param {Number} offset that is, from which one to get
 * @param {Number} limit The number of records obtained
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function latestTransactionQueryUser(
	account: number,
	market: string,
	side: 0 | 1 | 2,
	start_time: number,
	end_time: number,
	offset: number,
	limit: number
) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query_user`,
		params = [account, market, side, start_time, end_time, offset, limit],
		id = methodId;
	return await client.send({ method, params, id });
}
