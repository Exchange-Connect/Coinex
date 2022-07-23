/**
 * @fileOverview Futures API Endpoints
 * @module Futures
 * @requires axios
 */

const axios = require("axios").default;
const { METHOD_TYPE } = require("@root/src/constants/index");

/**
 * [Ping]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http004_ping}
 * @async
 * @function ping
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.ping = function () {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/ping",
	});
};

/**
 * [System Time]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http005_system_time}
 * @async
 * @function systemTime
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.systemTime = function () {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/time",
	});
};

/**
 * [Market List]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http006_market_list}
 * @async
 * @function marketList
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.marketList = function () {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/market/list",
	});
};

/**
 * [Position Level]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http007_market_limit}
 * @async
 * @function positionLevel
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.positionLevel = function () {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/market/limit_config",
	});
};

/**
 * [Market Status]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http008_market_ticker}
 * @async
 * @function marketStatus
 * @param {String} market Market name
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.marketStatus = function (market) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "https://api.coinex.com/perpetual/v1/market/ticker",
		params: {
			market,
		},
	});
};

/**
 * [All Market Status]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http009_market_ticker_all}
 * @async
 * @function allMarketStatus
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.allMarketStatus = function () {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/market/ticker/all",
	});
};

/**
 * [Market Depth]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http010_market_depth}
 * @async
 * @function marketDepth
 * @param {String} market Market name, such as: “BTCUSD” contract market
 * @param {"10"|"1"|"0"|"0.1"|"0.01"} merge Accuracy combined, the value is one of the values in ["10", "1", "0", "0.1", "0.01"]
 * @param {5|10|20|50|100} limit The number of obtained items, the value is one of the values in [5, 10, 20, 50, 100]
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.marketDepth = function (market, merge, limit) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/market/depth",
		params: {
			market,
			merge,
			limit,
		},
	});
};

/**
 * [Latest Transaction In The Market]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http011_market_deals}
 * @async
 * @function latestTransactionInTheMarket
 * @param {String} market Market name
 * @param {Number} [last_id] The largest ID of the last returned result
 * @param {Number} [limit] Number of query
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.latestTransactionInTheMarket = function (market, last_id, limit) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/market/deals",
		params: {
			market,
			last_id,
			limit,
		},
	});
};

/**
 * [Market K-Line]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http012_market_kline}
 * @async
 * @function marketKLine
 * @param {String} market Market market
 * @param {"1min"|"5min"|"15min"|"30min"|"1hour"|"2hour"|"4hour"|"6hour"|"12hour"|"1day"|"3day"|"1week"} type K-line information category, supports the following parameters: 1min, 5min, 15min, 30min, 1hour, 2hour, 4hour, 6hour, 12hour, 1day, 3day, 1week
 * @param {Number} [limit=1000] Get the K-line number, cannot exceed 1000 and the default is 1000
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.marketKLine = function (market, type, limit = 1000) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/market/kline",
		params: {
			market,
			type,
			limit,
		},
	});
};

/**
 * [User Transaction]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http013_user_deals}
 * @async
 * @function userTransaction
 * @param {String} market Market name
 * @param {0|1|2} side 0 unlimited, 1 sell, 2 buy
 * @param {Number} offset Offset
 * @param {Number} limit Number of query
 * @param {Number} [start_time] Start
 * @param {Number} [end_time] End
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.userTransaction = function (market, side, offset, limit, start_time, end_time) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/market/user_deals",
		params: {
			market,
			side,
			offset,
			limit,
			start_time,
			end_time,
		},
	});
};

/**
 * [Adjust Leverage]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http014_adjust_leverage}
 * @async
 * @function adjustLeverage
 * @param {String} market Market name
 * @param {String} leverage Margin
 * @param {1|2} position_type Position Type (1 Isolated Margin, 2 Cross Margin)
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.adjustLeverage = function (market, leverage, position_type, timestamp, windowtime) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/market/adjust_leverage",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			leverage,
			position_type,
			timestamp,
			windowtime,
		},
	});
};

/**
 * [Estimated Amount Of Positions To Be Opened]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http015_position_expect}
 * @async
 * @function estimatedAmountOfPositionsToBeOpened
 * @param {String} market Market name
 * @param {String} price Price
 * @param {1|2} side 1: sell 2: buy
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.estimatedAmountOfPositionsToBeOpened = function (market, price, side, timestamp, windowtime) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/market/position_expect",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			price,
			side,
			timestamp,
			windowtime,
		},
	});
};

/**
 * [Asset Query]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http016_asset_query}
 * @async
 * @function assetQuery
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.assetQuery = function () {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/asset/query",
		headers: {
			Authorization: "",
			Access_id: "",
		},
	});
};

/**
 * [Submit Limit Order]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http017_put_limit}
 * @async
 * @function submitLimitOrder
 * @param {String} market Market name
 * @param {1|2} side Order type (1: short sell, 2: long buy)
 * @param {String} amount Amount
 * @param {String} price Price
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {1|2|3} [effect_type=1] Order effective type (1: always valid, 2: immediate or cancel, 3: fill or kill, Default is 1)
 * @param {0|1|2|3} [option=0] Option (1: place maker orders only, 2: hidden order, 3: place maker orders only and hide the order, Default is 0)
 * @param {String} [client_id] Custom ID. This field is for identification only, supporting uppercase and lowercase letters, numbers, _ -, within 64 bytes
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitLimitOrder = function (
	market,
	side,
	amount,
	price,
	timestamp,
	effect_type = 1,
	option = 0,
	client_id,
	windowtime
) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/order/put_limit",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			side,
			amount,
			price,
			timestamp,
			effect_type,
			option,
			client_id,
			windowtime,
		},
	});
};

/**
 * [Submit Market Order]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http018_put_market}
 * @async
 * @function submitMarketOrder
 * @param {String} market Market name
 * @param {1|2} side Order type (1: short sell, 2: long buy)
 * @param {String} amount Amount
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {String} [client_id] Custom id, limited to 64 bytes, valid characters are uppercase and lowercase English letters, numbers, _-
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitMarketOrder = function (market, side, amount, timestamp, client_id, windowtime) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/order/put_market",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			side,
			amount,
			timestamp,
			client_id,
			windowtime,
		},
	});
};

/**
 * [Submit Stop-Limit Order]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http019_put_limit_stop}
 * @async
 * @function submitStopLimitOrder
 * @param {String} market Market name
 * @param {1|2} side Order type (1:short sell, 2:long buy)
 * @param {1|2|3} stop_type Trigger type (1: Triggered by the latest transaction price, 2: Triggered by the mark price, 3: Triggered by the index price)
 * @param {String} amount Amount
 * @param {String} stop_price Stop Price
 * @param {String} price Price
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {1|2|3} [effect_type=1] Order effective type (1: always valid, 2: immediate or cancel, 3: fill or kill, Default is 1)
 * @param {0|1|2|3} [option=0] Option (1: place maker orders only, 2: hidden order, 3: place maker orders only and hide the order, Default is 0)
 * @param {String} [client_id] Custom ID. This field is for identification only, supporting uppercase and lowercase letters, numbers, _ -, within 64 bytes
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitStopLimitOrder = function (
	market,
	side,
	stop_type,
	amount,
	stop_price,
	price,
	timestamp,
	effect_type = 1,
	option = 1,
	client_id,
	windowtime
) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/order/put_stop_limit",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			side,
			stop_type,
			amount,
			stop_price,
			price,
			timestamp,
			effect_type,
			option,
			client_id,
			windowtime,
		},
	});
};

/**
 * [Submit Stop-Market Order]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http020_put_market_stop}
 * @async
 * @function submitStopMarketOrder
 * @param {String} market Market name
 * @param {1|2} side Order type (1: short sell, 2: long buy)
 * @param {1|2|3} stop_type Trigger type (1: Triggered by the latest transaction price, 2: Triggered by the mark price, 3: Triggered by the index price)
 * @param {String} amount Amount
 * @param {String} stop_price Stop Price
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {String} [client_id] Client id
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitStopMarketOrder = function (
	market,
	side,
	stop_type,
	amount,
	stop_price,
	timestamp,
	client_id,
	windowtime
) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/order/put_stop_market",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			side,
			stop_type,
			amount,
			stop_price,
			timestamp,
			client_id,
			windowtime,
		},
	});
};

/**
 * [Cancel Order In Batch]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http021-0_cancel_order_batch}
 * @async
 * @function cancelOrderInBatch
 * @param {String} market Market name
 * @param {String} order_ids In the ID list of unexecuted orders, use “p” to separate multiple IDs
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelOrderInBatch = function (market, order_ids, timestamp, windowtime) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/order/cancel_batch",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			order_ids,
			timestamp,
			windowtime,
		},
	});
};

/**
 * [Cancel Order]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http021_cancel_order}
 * @async
 * @function cancelOrder
 * @param {String} market Market name
 * @param {Number} order_id Unexecuted order ID
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelOrder = function (market, order_id, timestamp, windowtime) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/order/cancel",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			order_id,
			timestamp,
			windowtime,
		},
	});
};

/**
 * [Cancel All Orders]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http022_cancel_all}
 * @async
 * @function cancelAllOrders
 * @param {String} market Market name
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {0|1|2} [side] Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelAllOrders = function (market, timestamp, side, windowtime) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/order/cancel_all",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			timestamp,
			side,
			windowtime,
		},
	});
};

/**
 * [Cancel Stop Order]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http023_cancel_stop_order}
 * @async
 * @function cancelStopOrder
 * @param {String} market Market name
 * @param {Number} order_id Unexecuted order ID
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelStopOrder = function (market, order_id, timestamp, windowtime) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/order/cancel_stop",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			order_id,
			timestamp,
			windowtime,
		},
	});
};

/**
 * [Cancel All Stop Orders]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http024_cancel_stop_all}
 * @async
 * @function cancelAllStopOrders
 * @param {String} market Market name
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {0|1|2} [side] Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelAllStopOrders = function (market, timestamp, side, windowtime) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/order/cancel_stop_all",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			timestamp,
			side,
			windowtime,
		},
	});
};

/**
 * [Query Pending Orders]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http025_query_pending}
 * @async
 * @function queryPendingOrders
 * @param {String} market Market name
 * @param {0|1|2} side Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} offset Offset, that is, from which one to get
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Number} [windowtime] Time window (unit: milliseconds)
 * @param {Number} [limit=20] Limit The number of records obtained at one time, the default is 20 and the maximum is 100
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.queryPendingOrders = function (market, side, offset, timestamp, windowtime, limit = 10) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/order/pending",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			side,
			offset,
			timestamp,
			windowtime,
			limit,
		},
	});
};

/**
 * [Order Status]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http026_order_status}
 * @async
 * @function orderStatus
 * @param {String} market Market name
 * @param {Number} order_id Order id
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Number} [windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.orderStatus = function (market, order_id, timestamp, windowtime) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/order/status",
		headers: {
			Authorization: "",
			Access_id: "",
		},
		params: {
			market,
			order_id,
			timestamp,
			windowtime,
		},
	});
};
