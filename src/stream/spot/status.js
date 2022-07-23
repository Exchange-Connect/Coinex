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
 * @param {String} market Market's Name
 * @param {Function<Object>} onData On Data Incomming Callback
 */
module.exports.subscribe = function (market, onData) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = "state.update",
		params = [market],
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
};

/**
 * Unsubscribe from Statuses Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.spot.status
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
 * Query the Statuses' Data on specific market
 * @async
 * @function query
 * @memberof Streams.spot.status
 * @param {String} market Market Name
 * @param {Number} period In Seconds, e.g. 86400 is the past 24 hours
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.query = function (market, period) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = [market, period],
		id = methodId;
	client.send({ method, params, id });
};
