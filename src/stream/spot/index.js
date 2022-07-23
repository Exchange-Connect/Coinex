/**
 * @fileOverview Spot Market Realtime Data Streaming
 * @namespace Streams.spot
 * @memberof Streams
 */

module.exports = {
	status: require("./status"),
	depth: require("./depth"),
	kline: require("./kline"),
	latestTransaction: require("./latestTransaction"),
	order: require("./order"),
	asset: require("./asset"),
	indexPrice: require("./indexPrice"),
	temporaryMaintenance: require("./temporaryMaintenanceNotice"),
};
