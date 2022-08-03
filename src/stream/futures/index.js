/**
 * @fileOverview Futures Market Realtime Data Streaming
 * @namespace Streams.futures
 * @memberof Streams
 */

module.exports = {
	status: require("./status"),
	depth: require("./depth"),
	kline: require("./kline"),
	latestTransaction: require("./latestTransaction"),
	order: require("./order"),
	position: require("./position"),
	asset: require("./asset"),
};