/**
 * Orders' Realtime Data
 * @namespace Streams.futures.position
 */
const { connections } = require("../connections");
const methodBaseName = "position";
const methodId = 15;

/**
 * Subscribe to Positions Realtime Data on Specific Market
 * @async
 * @function subscribe
 * @memberof Streams.futures.position
 * @param {Array<String>} markets Markets' Name
 * @param {function} onData On Data Incomming Callback
 */
export function futuresPositionSubscribe(markets: string[], onData: () => any) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = markets,
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Positions Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.futures.position
 */
export function futuresPositionUnsubscribe() {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params: [] = [],
		id = methodId;
	client.send({ method, params, id });
}

/**
 * Query the Positions' Data on specific market
 * @async
 * @function query
 * @memberof Streams.futures.position
 * @param {Array<String>} markets Markets' Name
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
export async function futuresPositionQuery(markets: string[]) {
	const client = connections.futures;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.query`,
		params = markets,
		id = methodId;
	return await client.send({ method, params, id });
}
