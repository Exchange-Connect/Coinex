/**
 * indexPrices' Realtime Data
 * @namespace Streams.spot.indexPrice
 */

const { connections } = require("../connections");
const methodBaseName = "index";
const methodId = 15;

/**
 * Subscribe to Index Price Realtime Data
 * @async
 * @function subscribe
 * @memberof Streams.spot.indexPrice
 * @param {Function<Object>} onData On Data Incomming Callback
 */
module.exports.subscribe = function (onData) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = [],
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
};

/**
 * Unsubscribe from Index Price Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.spot.indexPrice
 */
module.exports.unsubscribe = function () {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params = [],
		id = methodId;
	client.send({ method, params, id });
};

/**
 * Query the Index Prices' Data on specific market
 * @async
 * @function query
 * @memberof Streams.spot.indexPrice
 * @param {String} market Market name
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.query = function (market) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market],
		id = methodId;
	client.send({ method, params, id });
};

/**
 * Query all of the Index Prices' Data
 * @async
 * @function queryAll
 * @memberof Streams.spot.indexPrice
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.queryAll = function () {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.list`,
		params = [],
		id = methodId;
	client.send({ method, params, id });
};