/**
 * Assets' Realtime Data
 * @namespace Streams.futures.assets
 */

const { connections } = require("../connections");
const methodBaseName = "asset";
const methodId = 15;

/**
 * Subscribe to Assets Realtime Data
 * @async
 * @function subscribe
 * @memberof Streams.futures.assets
 * @param {Array<String>} markets Markets Name
 * @param {function} onData On Data Incomming Callback
 */
export function futuresAssetSubscribe(markets: string[], onData: () => any) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = markets,
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Assets Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.futures.assets
 */
export function futuresAssetUnsubscribe() {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params: [] = [],
		id = methodId;
	client.send({ method, params, id });
}

/**
 * Query the Assets' Data on specific markets
 * @async
 * @function query
 * @memberof Streams.futures.assets
 * @param {Array<String>} markets Markets Name
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function futuresAssetQuery(markets: string[]) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = markets,
		id = methodId;
	return await client.send({ method, params, id });
}
