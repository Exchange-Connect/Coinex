/**
 * Statuses' Realtime Data
 * @namespace Streams.futures.status
 */
const { connections } = require("../connections");
const methodBaseName = "state";
const methodId = 15;

/**
 * Subscribe to Statuses Realtime Data on Specific Market
 * @async
 * @function subscribe
 * @memberof Streams.futures.status
 * @param {String} market Market's Name
 * @param {function} onData On Data Incomming Callback
 */
function subscribe(market, onData) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = "state.update",
		params = [market],
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Statuses Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.futures.status
 */
function unsubscribe() {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params = [],
		id = methodId;
	client.send({ method, params, id });
}

/**
 * Query the Statuses' Data on specific market
 * @async
 * @function query
 * @memberof Streams.futures.status
 * @param {String} market Market Name
 * @param {Number} period In Seconds, e.g. 86400 is the past 24 hours
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
async function query(market, period) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, period],
		id = methodId;
	return await client.send({ method, params, id });
}

module.exports = {
	subscribe,
	unsubscribe,
	query,
};
