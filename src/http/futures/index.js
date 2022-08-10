/**
 * @fileOverview Futures API Endpoints
 * @module Futures
 */

const { BASE_URLS, METHOD_TYPE } = require("../../constants");
const { executeRequest } = require("../../libs");
const { signParams } = require("../../utils");

/**
 * [Ping]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http004_ping}
 * @async
 * @function ping
 * @returns {Promise<String>} Promise object represents the result of the request
 */
module.exports.ping = function () {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		// headers: {
		// 	authorization: signParams(apiSecret, params),
		// },
		url: "/ping",
		params,
	});
};

/**
 * [System Time]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http005_system_time}
 * @async
 * @function systemTime
 * @returns {Promise<Number>} Promise object represents the result of the request
 */
module.exports.systemTime = function () {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/time",
		params,
	});
};

/**
 * [Market List]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http006_market_list}
 * @async
 * @function marketList
 * @returns {Promise<Array<MarketListResult>>} Promise object represents the result of the request
 */
module.exports.marketList = function () {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/list",
		params,
	});
};

/**
 * [Position Level]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http007_market_limit}
 * @async
 * @function positionLevel
 * @returns {Promise<PositionLevelResults>} Promise object represents the result of the request
 */
module.exports.positionLevel = function () {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/limit_config",
		params,
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
	const params = { market };

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "https://api.coinex.com/perpetual/v1/market/ticker",
		params,
	});
};

/**
 * [All Market Status]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http009_market_ticker_all}
 * @async
 * @function allMarketStatus
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.allMarketStatus = function () {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/ticker/all",
		params,
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
	const params = {
		market,
		merge,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/depth",
		params,
	});
};

/**
 * [Latest Transaction In The Market]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http011_market_deals}
 * @async
 * @function latestTransactionInTheMarket
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.last_id] The largest ID of the last returned result
 * @param {Number} [options.limit] Number of query
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.latestTransactionInTheMarket = function (market, { last_id, limit } = {}) {
	const params = {
		market,
		last_id,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/deals",
		params,
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
	const params = {
		market,
		type,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/kline",
		params,
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
 * @param {Object} options Optional Parameters
 * @param {Number} [options.start_time] Start
 * @param {Number} [options.end_time] End
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.userTransaction = function (market, side, offset, limit, { start_time, end_time } = {}) {
	const params = {
		market,
		side,
		offset,
		limit,
		start_time,
		end_time,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/user_deals",
		params,
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
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.adjustLeverage = function (market, leverage, position_type, timestamp, { windowtime } = {}) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		leverage,
		position_type,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/adjust_leverage",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
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
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.estimatedAmountOfPositionsToBeOpened = function (market, price, side, timestamp, { windowtime } = {}) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		price,
		side,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/position_expect",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
	});
};

/**
 * [Asset Query]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http016_asset_query}
 * @async
 * @function assetQuery
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.assetQuery = function () {
	const { apiKey, apiSecret } = this;
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/asset/query",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
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
 * @param {Object} options Optional Parameters
 * @param {1|2|3} [options.effect_type=1] Order effective type (1: always valid, 2: immediate or cancel, 3: fill or kill, Default is 1)
 * @param {0|1|2|3} [options.option=0] Option (1: place maker orders only, 2: hidden order, 3: place maker orders only and hide the order, Default is 0)
 * @param {String} [options.client_id] Custom ID. This field is for identification only, supporting uppercase and lowercase letters, numbers, _ -, within 64 bytes
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitLimitOrder = function (
	market,
	side,
	amount,
	price,
	timestamp,
	{ effect_type = 1, option = 0, client_id, windowtime } = {}
) {
	const { apiKey, apiSecret } = this;
	const params = { market, side, amount, price, timestamp, effect_type, option, client_id, windowtime };

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/put_limit",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
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
 * @param {Object} options Optional Parameters
 * @param {String} [options.client_id] Custom id, limited to 64 bytes, valid characters are uppercase and lowercase English letters, numbers, _-
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitMarketOrder = function (market, side, amount, timestamp, { client_id, windowtime } = {}) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		amount,
		timestamp,
		client_id,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		url: "/order/put_market",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
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
 * @param {Object} options Optional Parameters
 * @param {1|2|3} [options.effect_type=1] Order effective type (1: always valid, 2: immediate or cancel, 3: fill or kill, Default is 1)
 * @param {0|1|2|3} [options.option=0] Option (1: place maker orders only, 2: hidden order, 3: place maker orders only and hide the order, Default is 0)
 * @param {String} [options.client_id] Custom ID. This field is for identification only, supporting uppercase and lowercase letters, numbers, _ -, within 64 bytes
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
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
	{ effect_type = 1, option = 0, client_id, windowtime } = {}
) {
	const { apiKey, apiSecret } = this;
	const params = {
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
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/put_stop_limit",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
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
 * @param {Object} options Optional Parameters
 * @param {String} [options.client_id] Client id
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
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
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		stop_type,
		amount,
		stop_price,
		timestamp,
		client_id,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/put_stop_market",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
	});
};

/**
 * [Cancel Order In Batch]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http021-0_cancel_order_batch}
 * @async
 * @function cancelOrderInBatch
 * @param {String} market Market name
 * @param {String} order_ids In the ID list of unexecuted orders, use “p” to separate multiple IDs
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelOrderInBatch = function (market, order_ids, timestamp, { windowtime } = {}) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_ids,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel_batch",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
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
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelOrder = function (market, order_id, timestamp, { windowtime } = {}) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_id,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
	});
};

/**
 * [Cancel All Orders]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http022_cancel_all}
 * @async
 * @function cancelAllOrders
 * @param {String} market Market name
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Object} options Optional Parameters
 * @param {0|1|2} [options.side] Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelAllOrders = function (market, timestamp, side, windowtime) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		timestamp,
		side,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel_all",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
	});
};

/**
 * [Cancel Stop Order]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http023_cancel_stop_order}
 * @async
 * @function cancelStopOrder
 * @param {String} market Market name
 * @param {Number} order_id Unexecuted order ID
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelStopOrder = function (market, order_id, timestamp, { windowtime } = {}) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_id,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel_stop",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
	});
};

/**
 * [Cancel All Stop Orders]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http024_cancel_stop_all}
 * @async
 * @function cancelAllStopOrders
 * @param {String} market Market name
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Object} options Optional Parameters
 * @param {0|1|2} [options.side] Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelAllStopOrders = function (market, timestamp, { side, windowtime } = {}) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		timestamp,
		side,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel_stop_all",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
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
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window (unit: milliseconds)
 * @param {Number} [options.limit=20] Limit The number of records obtained at one time, the default is 20 and the maximum is 100
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.queryPendingOrders = function (market, side, offset, timestamp, { windowtime, limit = 20 } = {}) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		offset,
		timestamp,
		windowtime,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/pending",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
	});
};

/**
 * [Order Status]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http026_order_status}
 * @async
 * @function orderStatus
 * @param {String} market Market name
 * @param {Number} order_id Order id
 * @param {Number} timestamp Client timestamp, unit: milliseconds
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.orderStatus = function (market, order_id, timestamp, windowtime) {
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_id,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/status",
		headers: {
			Authorization: signParams(apiSecret, params),
			Access_id: apiKey,
		},
		params,
	});
};
