/**
 * Temporary Maintenance Notices' Realtime Data
 * @namespace Streams.spot.temporaryMaintenanceNotice
 */
const { connections } = require("../connections");
const methodBaseName = "notice";
const methodId = 15;

/**
 * Subscribe to Temporary Maintenance Notices Realtime Data
 * @async
 * @function subscribe
 * @memberof Streams.spot.temporaryMaintenanceNotice
 * @param {function} onData On Data Incomming Callback
 */
export function temporaryMaintenanceNoticeSubscribe(onData: ()=>any) {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.subscribe`,
		onUpdateMethod = `${methodBaseName}.update`,
		params = [101],
		id = methodId;
	client.send({ method, params, id }, onUpdateMethod, onData);
}

/**
 * Unsubscribe from Temporary Maintenance Notices Realtime Data
 * @async
 * @function unsubscribe
 * @memberof Streams.spot.temporaryMaintenanceNotice
 */
export function temporaryMaintenanceNoticeUnsubscribe() {
	const client = connections.spot;
	if (!client) throw new Error("Web Socket is not Connected!");

	const method = `${methodBaseName}.unsubscribe`,
		params: [] = [],
		id = methodId;
	client.send({ method, params, id });
}
