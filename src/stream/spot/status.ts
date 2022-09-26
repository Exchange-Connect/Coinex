/**
 * Statuses' Realtime Data
 * @namespace Streams.spot.status
 */
const { connections } = require("../connections");
const methodBaseName = "state";
const methodId = 15;

/**
 * Subscribe to Statuses Realtime Data on Specific Market
 * @async
 * @function subscribe
 * @memberof Streams.spot.status
 * @param {String} market Market's Name (null: Subscribe to all markets)
 * @param {function} onData On Data Incomming Callback
 */
export function statusSubscribe(market: string | null, onData: () => any) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = market ? [market] : [],
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Statuses Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.spot.status
 */
export function statusUnsubscribe() {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params: [] = [],
		id = methodId;
	client.send({ method, params, id });
}

/**
 * Query the Statuses' Data on specific market
 * @async
 * @function query
 * @memberof Streams.spot.status
 * @param {String} market Market Name
 * @param {Number} period In Seconds, e.g. 86400 is the past 24 hours
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function statusQuery(market: string, period: number) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, period],
		id = methodId;
	return await client.send({ method, params, id });
}
