/**
 * @fileOverview Futures API Endpoints
 * @module Futures
 */

const { BASE_URLS, METHOD_TYPE } = require("../../constants");
const { executeRequest } = require("../../libs");
const { signParams } = require("../../utils");

/**
 * [Ping (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http004_ping}
 * @async
 * @function futuresPing
 * @returns {Promise<String>} Promise object represents the result of the request
 */
export function futuresPing() {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/ping",
		params,
	});
}

/**
 * [System Time (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http005_system_time}
 * @async
 * @function futuresSystemTime
 * @returns {Promise<Number>} Promise object represents the result of the request
 */
export function futuresSystemTime() {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/time",
		params,
	});
}

/**
 * [Market List (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http006_market_list}
 * @async
 * @function futuresMarketList
 * @returns {Promise<Array<MarketListResult>>} Promise object represents the result of the request
 */
export function futuresMarketList() {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/list",
		params,
	});
}

/**
 * [Position Level (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http007_market_limit}
 * @async
 * @function futuresPositionLevel
 * @returns {Promise<PositionLevelResults>} Promise object represents the result of the request
 */
export function futuresPositionLevel() {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/limit_config",
		params,
	});
}

/**
 * [Market Status (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http008_market_ticker}
 * @async
 * @function futuresMarketStatus
 * @param {String} market Market name
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresMarketStatus(market: string) {
	const params = { market };

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "https://api.coinex.com/perpetual/v1/market/ticker",
		params,
	});
}

/**
 * [All Market Status (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http009_market_ticker_all}
 * @async
 * @function futuresAllMarketStatus
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresAllMarketStatus() {
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/ticker/all",
		params,
	});
}

/**
 * [Market Depth (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http010_market_depth}
 * @async
 * @function futuresMarketDepth
 * @param {String} market Market name, such as: “BTCUSD” contract market
 * @param {"10"|"1"|"0"|"0.1"|"0.01"} merge Accuracy combined, the value is one of the values in ["10", "1", "0", "0.1", "0.01"]
 * @param {5|10|20|50|100} limit The number of obtained items, the value is one of the values in [5, 10, 20, 50, 100]
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresMarketDepth(
	market: string,
	merge: "0.01" | "0.1" | "0" | "1" | "10",
	limit: 5 | 10 | 20 | 50 | 100
) {
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
}

/**
 * [Latest Transaction In The Market (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http011_market_deals}
 * @async
 * @function futuresLatestTransactionInTheMarket
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.last_id] The largest ID of the last returned result
 * @param {Number} [options.limit] Number of query
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresLatestTransactionInTheMarket(
	market: string,
	{ last_id, limit }: { last_id?: number; limit?: number } = {}
) {
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
}

/**
 * [Market K-Line (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http012_market_kline}
 * @async
 * @function futuresMarketKLine
 * @param {String} market Market market
 * @param {"1min"|"5min"|"15min"|"30min"|"1hour"|"2hour"|"4hour"|"6hour"|"12hour"|"1day"|"3day"|"1week"} type K-line information category, supports the following parameters: 1min, 5min, 15min, 30min, 1hour, 2hour, 4hour, 6hour, 12hour, 1day, 3day, 1week
 * @param {Number} [limit=1000] Get the K-line number, cannot exceed 1000 and the default is 1000
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresMarketKLine(
	market: string,
	type:
		| "1min"
		| "5min"
		| "15min"
		| "30min"
		| "1hour"
		| "2hour"
		| "4hour"
		| "6hour"
		| "12hour"
		| "1day"
		| "3day"
		| "1week",
	limit = 1000
) {
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
}

/**
 * [User Transaction (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http013_user_deals}
 * @async
 * @function futuresUserTransaction
 * @param {String} market Market name
 * @param {0|1|2} side 0 unlimited, 1 sell, 2 buy
 * @param {Number} offset Offset
 * @param {Number} limit Number of query
 * @param {Object} options Optional Parameters
 * @param {Number} [options.start_time] Start
 * @param {Number} [options.end_time] End
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresUserTransaction(
	market: string,
	side: 0 | 1 | 2,
	offset: number,
	limit: number,
	{ start_time, end_time, timestamp }: { start_time?: number; end_time?: number; timestamp: number } = {
		timestamp: Date.now(),
	}
) {
	const params = {
		market,
		side,
		offset,
		limit,
		start_time,
		end_time,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/user_deals",
		params,
	});
}

/**
 * [Adjust Leverage (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http014_adjust_leverage}
 * @async
 * @function futuresAdjustLeverage
 * @param {String} market Market name
 * @param {String} leverage Margin
 * @param {1|2} position_type Position Type (1 Isolated Margin, 2 Cross Margin)
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresAdjustLeverage(
	market: string,
	leverage: string,
	position_type: 1 | 2,
	{ windowtime, timestamp }: { windowtime?: number; timestamp: number } = { timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		leverage,
		position_type,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/adjust_leverage",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Estimated Amount Of Positions To Be Opened (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http015_position_expect}
 * @async
 * @function futuresEstimatedAmountOfPositionsToBeOpened
 * @param {String} market Market name
 * @param {String} price Price
 * @param {1|2} side 1: sell 2: buy
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresEstimatedAmountOfPositionsToBeOpened(
	market: string,
	price: string,
	side: 1 | 2,
	{ windowtime, timestamp }: { windowtime?: number; timestamp: number } = { timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		price,
		side,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/position_expect",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Asset Query (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http016_asset_query}
 * @async
 * @function futuresAssetQuery
 * @param {Object} options Optional Parameters
 * @param {Number} [options.timestamp=Date.now()]
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresAssetQuery({ timestamp }: { timestamp: number } = { timestamp: Date.now() }) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/asset/query",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Submit Limit Order (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http017_put_limit}
 * @async
 * @function futuresSubmitLimitOrder
 * @param {String} market Market name
 * @param {1|2} side Order type (1: short sell, 2: long buy)
 * @param {String} amount Amount
 * @param {String} price Price
 * @param {Object} options Optional Parameters
 * @param {1|2|3} [options.effect_type=1] Order effective type (1: always valid, 2: immediate or cancel, 3: fill or kill, Default is 1)
 * @param {0|1|2|3} [options.option=0] Option (1: place maker orders only, 2: hidden order, 3: place maker orders only and hide the order, Default is 0)
 * @param {String} [options.client_id] Custom ID. This field is for identification only, supporting uppercase and lowercase letters, numbers, _ -, within 64 bytes
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresSubmitLimitOrder(
	market: string,
	side: 1 | 2,
	amount: string,
	price: string,
	{
		effect_type,
		option,
		client_id,
		windowtime,
		timestamp,
	}: {
		effect_type: 1 | 2 | 3;
		option: 0 | 1 | 2 | 3;
		client_id?: string;
		windowtime?: number;
		timestamp: number;
	} = {
		effect_type: 1,
		option: 0,
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		amount,
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
		url: "/order/put_limit",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Submit Market Order (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http018_put_market}
 * @async
 * @function futuresSubmitMarketOrder
 * @param {String} market Market name
 * @param {1|2} side Order type (1: short sell, 2: long buy)
 * @param {String} amount Amount
 * @param {Object} options Optional Parameters
 * @param {String} [options.client_id] Custom id, limited to 64 bytes, valid characters are uppercase and lowercase English letters, numbers, _-
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresSubmitMarketOrder(
	market: string,
	side: 1 | 2,
	amount: string,
	{
		client_id,
		windowtime,
		timestamp,
	}: {
		client_id?: string;
		windowtime?: number;
		timestamp: number;
	} = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		amount,
		client_id,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		url: "/order/put_market",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Submit Stop-Limit Order (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http019_put_limit_stop}
 * @async
 * @function futuresSubmitStopLimitOrder
 * @param {String} market Market name
 * @param {1|2} side Order type (1:short sell, 2:long buy)
 * @param {1|2|3} stop_type Trigger type (1: Triggered by the latest transaction price, 2: Triggered by the mark price, 3: Triggered by the index price)
 * @param {String} amount Amount
 * @param {String} stop_price Stop Price
 * @param {String} price Price
 * @param {Object} options Optional Parameters
 * @param {1|2|3} [options.effect_type=1] Order effective type (1: always valid, 2: immediate or cancel, 3: fill or kill, Default is 1)
 * @param {0|1|2|3} [options.option=0] Option (1: place maker orders only, 2: hidden order, 3: place maker orders only and hide the order, Default is 0)
 * @param {String} [options.client_id] Custom ID. This field is for identification only, supporting uppercase and lowercase letters, numbers, _ -, within 64 bytes
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresSubmitStopLimitOrder(
	market: string,
	side: 1 | 2,
	stop_type: 1 | 2 | 3,
	amount: string,
	stop_price: string,
	price: string,
	{
		effect_type,
		option,
		client_id,
		windowtime,
		timestamp,
	}: {
		effect_type: 1 | 2 | 3;
		option: 0 | 1 | 2 | 3;
		client_id?: string;
		windowtime?: number;
		timestamp: number;
	} = {
		effect_type: 1,
		option: 0,
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		stop_type,
		amount,
		stop_price,
		price,
		effect_type,
		option,
		client_id,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/put_stop_limit",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Submit Stop-Market Order (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http020_put_market_stop}
 * @async
 * @function futuresSubmitStopMarketOrder
 * @param {String} market Market name
 * @param {1|2} side Order type (1: short sell, 2: long buy)
 * @param {1|2|3} stop_type Trigger type (1: Triggered by the latest transaction price, 2: Triggered by the mark price, 3: Triggered by the index price)
 * @param {String} amount Amount
 * @param {String} stop_price Stop Price
 * @param {Object} options Optional Parameters
 * @param {String} [options.client_id] Client id
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresSubmitStopMarketOrder(
	market: string,
	side: 1 | 2,
	stop_type: 1 | 2 | 3,
	amount: string,
	stop_price: string,
	{
		client_id,
		windowtime,
		timestamp,
	}: {
		client_id?: string;
		windowtime?: number;
		timestamp: number;
	} = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		stop_type,
		amount,
		stop_price,
		client_id,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/put_stop_market",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Cancel Order In Batch]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http021-0_cancel_order_batch}
 * @async
 * @function futuresCancelOrderInBatch
 * @param {String} market Market name
 * @param {String} order_ids In the ID list of unexecuted orders, use “p” to separate multiple IDs
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresCancelOrderInBatch(
	market: string,
	order_ids: string[],
	{
		windowtime,
		timestamp,
	}: {
		windowtime?: number;
		timestamp: number;
	} = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_ids,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel_batch",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params: {
			market,
			order_ids,
			timestamp,
			windowtime,
		},
	});
}

/**
 * [Cancel Order (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http021_cancel_order}
 * @async
 * @function futuresCancelOrder
 * @param {String} market Market name
 * @param {Number} order_id Unexecuted order ID
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresCancelOrder(
	market: string,
	order_id: string,
	{
		windowtime,
		timestamp,
	}: {
		windowtime?: number;
		timestamp: number;
	} = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_id,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Cancel All Orders (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http022_cancel_all}
 * @async
 * @function futuresCancelAllOrders
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {0|1|2} [options.side] Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresCancelAllOrders(
	market: string,
	{
		side,
		windowtime,
		timestamp,
	}: {
		side?: 0 | 1 | 2;
		windowtime?: number;
		timestamp: number;
	} = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel_all",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Cancel Stop Order (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http023_cancel_stop_order}
 * @async
 * @function futuresCancelStopOrder
 * @param {String} market Market name
 * @param {Number} order_id Unexecuted order ID
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresCancelStopOrder(
	market: string,
	order_id: string,
	{
		windowtime,
		timestamp,
	}: {
		windowtime?: number;
		timestamp: number;
	} = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_id,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel_stop",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Cancel All Stop Orders (Future)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http024_cancel_stop_all}
 * @async
 * @function futuresCancelAllStopOrders
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {0|1|2} [options.side] Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresCancelAllStopOrders(
	market: string,
	{
		side,
		windowtime,
		timestamp,
	}: {
		side?: 0 | 1 | 2;
		windowtime?: number;
		timestamp: number;
	} = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/cancel_stop_all",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Query Pending Orders (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http025_query_pending}
 * @async
 * @function futuresQueryPendingOrders
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {0|1|2} [options.side=0] Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} [options.offset=1] Offset, that is, from which one to get
 * @param {Number} [options.windowtime] Time window (unit: milliseconds)
 * @param {Number} [options.limit=100] Limit The number of records obtained at one time, the default is 20 and the maximum is 100
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresQueryPendingOrders(
	market: string,
	{
		offset,
		side,
		limit,
		windowtime,
		timestamp,
	}: {
		offset: number;
		side: 0 | 1 | 2;
		limit: number;
		windowtime?: number;
		timestamp: number;
	} = {
		offset: 1,
		side: 0,
		limit: 100,
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		offset,
		windowtime,
		limit,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/pending",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Order Status (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http026_order_status}
 * @async
 * @function futuresOrderStatus
 * @param {String} market Market name
 * @param {Number} order_id Order id
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresOrderStatus(
	market: string,
	order_id: number,
	{
		windowtime,
		timestamp,
	}: {
		windowtime?: number;
		timestamp: number;
	} = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_id,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/status",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Query Pending Stop Orders (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http027_query_pending_stop}
 * @async
 * @function futuresQueryPendingStopOrders
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {0|1|2} [options.side=0] Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} [options.offset=1] Offset, that is, from which one to get
 * @param {Number} [options.windowtime] Time window (unit: milliseconds)
 * @param {Number} [options.limit=100] Limit The number of records obtained at one time, the default is 20 and the maximum is 100
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresQueryPendingStopOrders(
	market: string,
	{
		offset,
		side,
		limit,
		windowtime,
		timestamp,
	}: {
		offset: number;
		side: 0 | 1 | 2;
		limit: number;
		windowtime?: number;
		timestamp: number;
	} = {
		offset: 1,
		side: 0,
		limit: 100,
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		side,
		offset,
		windowtime,
		limit,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/stop_pending",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Stop Order Status (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http028_stop_status}
 * @async
 * @function futuresStopOrderStatus
 * @param {String} market Market name
 * @param {Number} order_id Order id
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresStopOrderStatus(
	market: string,
	order_id: number,
	{
		windowtime,
		timestamp,
	}: {
		windowtime?: number;
		timestamp: number;
	} = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_id,
		windowtime,
		timestamp,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/stop_status",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Query Finished Orders (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http029_query_finished}
 * @async
 * @function futuresQueryFinishedOrders
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {0|1|2} [options.side=0] Order type (0: All 1: Sell, 2: Buy)
 * @param {Number} [options.offset=1] Offset, that is, from which one to get
 * @param {Number} [options.limit=100] Limit The number of records obtained at one time, the default is 20 and the maximum is 100
 * @param {Number} [options.start_time]
 * @param {Number} [options.end_time]
 * @param {Number} [options.timestamp=Date.now] Client timestamp, unit: milliseconds
 * @param {Number} [options.windowtime] Time window (unit: milliseconds)
 * @returns {Promise} Promise object represents the result of the request
 */
export function futuresQueryFinishedOrders(
	market: string,
	{
		side,
		offset,
		limit,
		start_time,
		end_time,
		timestamp,
		windowtime,
	}: {
		side: 0 | 1 | 2;
		offset: number;
		limit: number;
		start_time?: number;
		end_time?: number;
		timestamp: number;
		windowtime?: number;
	} = {
		side: 0,
		offset: 1,
		limit: 100,
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		side,
		market,
		offset,
		limit,
		start_time,
		end_time,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/finished",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Limit Close (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http030_limit_close}
 * @async
 * @function futuresLimitClose
 * @param {String} market Market name
 * @param {Number} position_id Position ID
 * @param {String} amount Amount of closed positions
 * @param {String} price Price
 * @param {Object} options Optional Parameters
 * @param {String} [options.client_id] Custom ID. This field is for identification only, supporting uppercase and lowercase letters, numbers, _ -, within 64 bytes
 * @param {1|2|3} [options.effect_type=1] Order effective type, 1: always valid, 2: immediate or cancel, 3: fill or kill.Default is 1
 * @param {0|1} [options.option=0] Option, 1: place maker orders only. Default is 0.
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresLimitClose(
	market: string,
	position_id: number,
	amount: string,
	price: string,
	{
		client_id,
		effect_type,
		option,
		timestamp,
		windowtime,
	}: { client_id?: string; effect_type?: 1 | 2 | 3; option?: 0 | 1; timestamp: number; windowtime?: number } = {
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		position_id,
		amount,
		price,
		effect_type,
		option,
		client_id,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/close_limit",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Market Close (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http031_market_close}
 * @async
 * @function futuresMarketClose
 * @param {String} market Market name
 * @param {Number} position_id Position ID
 * @param {Object} options Optional Parameters
 * @param {String} [amount=null] The number of positions to be closed, null to close all positions
 * @param {String} [options.client_id] Custom ID. This field is for identification only, supporting uppercase and lowercase letters, numbers, _ -, within 64 bytes
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresMarketClose(
	market: string,
	position_id: number,
	{
		amount,
		client_id,
		timestamp,
		windowtime,
	}: {
		amount: string | null;
		client_id?: string;
		timestamp: number;
		windowtime?: number;
	} = {
		amount: null,
		timestamp: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		position_id,
		amount,
		client_id,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/close_market",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Adjust Position Margin (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http032_adjust_position_margin}
 * @async
 * @function futuresAdjustPositionMargin
 * @param {String} market Market name
 * @param {String} amount Adjustment limit
 * @param {1|2} type Adjustment type: 1 means increase margin, 2 means decrease margin
 * @param {Object} options Optional Parameters
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresAdjustPositionMargin(
	market: string,
	amount: string,
	type: 1 | 2,
	{ timestamp, windowtime }: { timestamp: number; windowtime?: number } = { timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		amount,
		type,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/position/adjust_margin",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [User Positions (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http033_pending_position}
 * @async
 * @function futuresUserPositions
 * @param {Object} options Optional Parameters
 * @param {String} [options.market] Market name
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresUserPositions(
	market: string,
	{ timestamp, windowtime }: { timestamp: number; windowtime?: number } = { timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/position/pending",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Query User Historical Funding Rate (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http034_funding_position}
 * @async
 * @function futuresQueryUserHistoricalFundingRate
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.start_time] Start
 * @param {Number} [options.end_time] End
 * @param {Number} [options.offset=0] Offset
 * @param {Number} [options.limit=10] Number of records obtained
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresQueryUserHistoricalFundingRate(
	market: string,
	{
		start_time,
		end_time,
		offset,
		limit,
		timestamp,
		windowtime,
	}: {
		start_time?: number;
		end_time?: number;
		offset: number;
		limit: number;
		timestamp: number;
		windowtime?: number;
	} = { offset: 0, limit: 10, timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		offset,
		timestamp,
		start_time,
		end_time,
		windowtime,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/position/funding",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Position Stop-Loss Settings (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http035_stop_loss_position}
 * @async
 * @function futuresPositionStopLossSettings
 * @param {String} market Market name
 * @param {Number} position_id Position id
 * @param {Number} stop_type 1: Transaction price, 3: Mark price
 * @param {String} stop_loss_price Stop-loss price
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresPositionStopLossSettings(
	market: string,
	position_id: number,
	stop_type: number,
	stop_loss_price: string,
	{
		windowtime,
		timestamp,
	}: {
		windowtime?: number;
		timestamp: number;
	} = { timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		position_id,
		stop_type,
		stop_loss_price,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/position/stop_loss",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Position Take-Profit Settings (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http036_take_profit_position}
 * @async
 * @function futuresPositionTakeProfitSettings
 * @param {String} market Perpetual Market
 * @param {Number} position_id Position id
 * @param {Number} stop_type 1: Transaction price, 3: Mark price
 * @param {String} take_profit_price Take-profit price
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresPositionTakeProfitSettings(
	market: string,
	position_id: number,
	stop_type: number,
	take_profit_price: string,
	{
		windowtime,
		timestamp,
	}: {
		windowtime?: number;
		timestamp: number;
	} = { timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		position_id,
		stop_type,
		take_profit_price,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/position/take_profit",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Market Close All (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http037_market_close_position}
 * @async
 * @function futuresMarketCloseAll
 * @param {String} market Market name
 * @param {Number} position_id Position id
 * @param {Object} options Optional Parameters
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresMarketCloseAll(
	market: string,
	position_id: number,
	{
		windowtime,
		timestamp,
	}: {
		windowtime?: number;
		timestamp: number;
	} = { timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		position_id,
		timestamp,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/position/market_close",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Query Market Historical Funding Rate (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http038_funding_history}
 * @async
 * @function futuresQueryMarketHistoricalFundingRate
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.start_time] Start
 * @param {Number} [options.end_time] End
 * @param {Number} [options.offset=0] Offset
 * @param {Number} [options.limit=10] Number of records obtained
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresQueryMarketHistoricalFundingRate(
	market: string,
	{
		start_time,
		end_time,
		offset,
		limit,
	}: {
		start_time?: number;
		end_time?: number;
		offset: number;
		limit: number;
	} = { offset: 0, limit: 10 }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		offset,
		start_time,
		end_time,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/market/funding_history",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Modify Order (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http039_modify_order}
 * @async
 * @function futuresModifyOrder
 * @param {String} market Market name
 * @param {Number} order_id Order id
 * @param {Object} options Optional Parameters
 * @param {String} [options.amount] Amount
 * @param {String} [options.price] Price
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresModifyOrder(
	market: string,
	order_id: number,
	{
		amount,
		price,
		windowtime,
		timestamp,
	}: {
		amount?: string;
		price?: string;
		windowtime?: number;
		timestamp: number;
	} = { timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_id,
		timestamp,
		amount,
		price,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/modify",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Modify Stop Order (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http040_modify_stop_order}
 * @async
 * @function futuresModifyStopOrder
 * @param {String} market Market name
 * @param {Number} order_id Order id
 * @param {Object} options Optional Parameters
 * @param {String} [options.amount] Amount
 * @param {String} [options.price] Price
 * @param {String} [options.stop_price] Stop Price
 * @param {Number} [options.windowtime] Time window, unit: milliseconds
 * @param {Number} [options.timestamp=Date.now()] Client timestamp, unit: milliseconds
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresModifyStopOrder(
	market: string,
	order_id: number,
	{
		amount,
		price,
		stop_price,
		windowtime,
		timestamp,
	}: {
		amount?: string;
		price?: string;
		stop_price?: string;
		windowtime?: number;
		timestamp: number;
	} = { timestamp: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		order_id,
		timestamp,
		amount,
		price,
		stop_price,
		windowtime,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.FUTURES,
		url: "/order/modify_stop",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}

/**
 * [Position ADL History Query (Futures)]{@link https://viabtc.github.io/coinex_api_en_doc/futures/#docsfutures001_http041_position_adl_history}
 * @async
 * @function futuresPositionADLHistoryQuery
 * @param {Object} options Optional Parameters
 * @param {String} [options.market=""] Market name, empty string to query all markets
 * @param {Number} [options.position_id=0] Order ID, value 0 to query all positions
 * @param {Number} [options.start_time] Start
 * @param {Number} [options.end_time] End
 * @param {Number} [options.offset=0] Offset
 * @param {Number} [options.limit=10] Number of query
 * @returns {Promise<>} Promise object represents the result of the request
 */
export function futuresPositionADLHistoryQuery(
	{
		market,
		position_id,
		start_time,
		end_time,
		offset,
		limit,
	}: {
		market: string;
		position_id: number;
		start_time?: number;
		end_time?: number;
		offset: number;
		limit: number;
	} = {
		market: "",
		position_id: 0,
		offset: 0,
		limit: 10,
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		position_id,
		offset,
		start_time,
		end_time,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.FUTURES,
		url: "/position/adl_history",
		headers: {
			Authorization: signParams(apiSecret, params, "sha256"),
			AccessId: apiKey,
		},
		params,
	});
}
