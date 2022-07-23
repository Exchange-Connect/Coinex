/**
 * Assets' Realtime Data
 * @namespace Streams.spot.assets
 */

const { connections } = require("../connections");
const methodBaseName = "asset";
const methodId = 15;

/**
 * Subscribe to Assets Realtime Data
 * @async
 * @function subscribe
 * @memberof Streams.spot.assets
 * @param {Array<String>} markets Markets Name
 * @param {Function<Object>} onData On Data Incomming Callback
 */
module.exports.subscribe = function (markets, onData) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = markets,
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
};

/**
 * Unsubscribe from Assets Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.spot.assets
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
 * Query the Assets' Data on specific markets
 * @async
 * @function query
 * @memberof Streams.spot.assets
 * @param {Array<String>} markets Markets Name
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.query = function (markets) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = markets,
		id = methodId;
	client.send({ method, params, id });
};

/**
 * Query all Assets' Data
 * @async
 * @function queryAll
 * @memberof Streams.spot.assets
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.queryAll = function () {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.account_query_all`,
		params = [],
		id = methodId;
	client.send({ method, params, id });
};

/**
 * Query the Assets' Data on specific markets and account
 * @async
 * @function queryAccount
 * @memberof Streams.spot.assets
 * @param {Number} account Account ID
 * @param {Array<String>} markets Markets Name
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.queryAccount = function (account, markets) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query_account`,
		params = [account, markets],
		id = methodId;
	client.send({ method, params, id });
};