/**
 * Orders' Realtime Data
 * @namespace Streams.spot.order
 */

const { connections } = require("../connections");
const methodBaseName = "order";
const methodId = 15;

/**
 * Subscribe to Orders Realtime Data on Specific Market
 * @async
 * @function subscribe
 * @memberof Streams.spot.order
 * @param {Array<String>} markets Markets' Name
 * @param {function} onData On Data Incomming Callback
 */
function subscribe(markets, onData) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = markets,
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Orders Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.spot.order
 */
function unsubscribe() {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params = [],
		id = methodId;
	client.send({ method, params, id });
}

/**
 * Query the Orders' Data on specific market
 * @async
 * @function query
 * @memberof Streams.spot.order
 * @param {String} market Market Name
 * @param {0|1|2} side Transaction Direction (0: all, 1: sell, 2: buy)
 * @param {Number} offset That is, from which one to get
 * @param {Number} limit The number of records obtained
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
async function query(market, side, offset, limit) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, side, offset, limit],
		id = methodId;
	return await client.send({ method, params, id });
}

/**
 * Query the stop Orders' Data on specific market
 * @async
 * @function queryStop
 * @memberof Streams.spot.order
 * @param {String} market Market Name
 * @param {0|1|2} side Transaction Direction (0: all, 1: sell, 2: buy)
 * @param {Number} offset that is, from which one to get
 * @param {Number} limit The number of records obtained
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
async function queryStop(market, side, offset, limit) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query_stop`,
		params = [market, side, offset, limit],
		id = methodId;
	return await client.send({ method, params, id });
}

/**
 * Query the Orders' Data on specific market and account
 * @async
 * @function queryAccount
 * @memberof Streams.spot.order
 * @param {Number} account Account ID
 * @param {String} market Market Name
 * @param {0|1|2} side Transaction Direction (0: all, 1: sell, 2: buy)
 * @param {Number} offset that is, from which one to get
 * @param {Number} limit The number of records obtained
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
async function queryAccount(account, market, side, offset, limit) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [account, market, side, offset, limit],
		id = methodId;
	return await client.send({ method, params, id });
}

/**
 * Query the stop Orders' Data on specific market and account
 * @async
 * @function queryAccountStop
 * @memberof Streams.spot.order
 * @param {Number} account Account ID
 * @param {String} market Market Name
 * @param {0|1|2} side Transaction Direction (0: all, 1: sell, 2: buy)
 * @param {Number} offset that is, from which one to get
 * @param {Number} limit The number of records obtained
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
async function queryAccountStop(account, market, side, offset, limit) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [account, market, side, offset, limit],
		id = methodId;
	return await client.send({ method, params, id });
}

module.exports = {
	subscribe,
	unsubscribe,
	query,
	queryStop,
	queryAccount,
	queryAccountStop,
};
