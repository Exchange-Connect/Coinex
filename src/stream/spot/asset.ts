/**
 * Assets' Realtime Data
 * @namespace Streams.spot.assets
 */

const { connections } = require("../connections");
const methodBaseName = "asset";

/**
 * Subscribe to Assets Realtime Data
 * @async
 * @function subscribe
 * @memberof Streams.spot.assets
 * @param {Array<String>} markets Markets Name
 * @param {function} onData On Data Incomming Callback
 */
export async function subscribe(markets: string[], onData: ()=>any) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = markets;
	return await client.send({ method, params }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Assets Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.spot.assets
 */
export async function assetUnsubscribe() {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params: [] = [];
	return await client.send({ method, params });
}

/**
 * Query the Assets' Data on specific markets
 * @async
 * @function query
 * @memberof Streams.spot.assets
 * @param {Array<String>} markets Markets Name
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function assetQuery(markets: string[]) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = markets;
	return await client.send({ method, params });
}

/**
 * Query all Assets' Data
 * @async
 * @function queryAll
 * @memberof Streams.spot.assets
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function assetQueryAll() {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.account_query_all`,
		params: [] = [];
	return await client.send({ method, params });
}

/**
 * Query the Assets' Data on specific markets and account
 * @async
 * @function queryAccount
 * @memberof Streams.spot.assets
 * @param {Number} account Account ID
 * @param {Array<String>} markets Markets Name
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function assetQueryAccount(account: number, markets: string[]) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query_account`,
		params = [account, markets];
	return await client.send({ method, params });
}