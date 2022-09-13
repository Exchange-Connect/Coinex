/**
 * @fileOverview Trading API Endpoints
 * @module Trading
 */

const { BASE_URLS, METHOD_TYPE } = require("../../constants");
const { executeRequest } = require("../../libs");
const { signParams } = require("../../utils");

/**
 * [Submit Limit Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade001_limit_order}
 * @async
 * @function submitLimitOrder
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {String} market Market name
 * @param {"sell"|"buy"} type Operation (sell: ask order, buy: bid order)
 * @param {String} price Order price, accurate to 8 decimals
 * @param {Object} options Optional Parameters
 * @param {String} [options.source_id] User-defined number and return
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [options.client_id] client_id is the custom ID of the order.Currently it only supports uppercase and lowercase letters, numbers, hyphens and underscores, and within 32 bytes limit.
 * @param {"true"|"false"} [options.hide] Whether to hide the submission (true: hidden, false: not hidden)
 * @param {"NORMAL"|"IOC"|"FOK"|"MAKER_ONLY"} [options.option] Order strategy (default is NORMAL) (Normal: NORMAL, Immediate or Cancel: IOC, Fill or Kill: FOK, Maker Only: MAKER_ONLY)
 * @param {String} [options.access_id] Key ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<SubmitLimitOrderResult>} Promise object represents the result of the request
 */
module.exports.submitLimitOrder = function (
	amount,
	market,
	type,
	price,
	{ source_id, account_id, client_id, hide, option, access_id, tonce = Date.now() } = {}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		amount,
		market,
		type,
		price,
		source_id,
		account_id,
		client_id,
		hide,
		option,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/limit",
		params,
	});
};

/**
 * [Submit Limit Orders In Batch]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade002_batch_limit_orders}
 * @async
 * @function submitLimitOrdersInBatch
 * @param {Object[]} batch_orders Multi-order json format string
 * @param {"sell"|"buy"} batch_orders[].type Order Direction (sell: Sell Order, buy: Buy Order)
 * @param {String} batch_orders[].amount Order amount, the min. order amount is determined by the market
 * @param {String} batch_orders[].price Order price, 8-digit decimal
 * @param {String} [batch_orders[].source_id] User-Defined ID
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.submitLimitOrdersInBatch = function (
	batch_orders,
	market,
	{ account_id, access_id, tonce = Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		batch_orders,
		market,
		account_id,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/limit/batch",
		params,
	});
};

/**
 * [Submit Market Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade003_market_order}
 * @async
 * @function submitMarketOrder
 * @param {String} market Market name
 * @param {"sell"|"buy"} type (sell: ask order, buy: bid order)
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {Object} options Optional Parameters
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [options.client_id] User-defined order id
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.submitMarketOrder = function (
	market,
	type,
	amount,
	{ account_id, client_id, access_id, tonce = Date.now() } = {}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		type,
		amount,
		account_id,
		client_id,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/market",
		params,
	});
};

/**
 * [Submit IOC Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade004_IOC_order}
 * @async
 * @function submitIOCOrder
 * @param {String} market Market name
 * @param {"sell"|"buy"} type (sell: ask order, buy: bid order)
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {String} price Order price, determined by the market
 * @param {Object} options Optional Parameters
 * @param {String} [options.source_id] User-defined id
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [options.client_id] User-defined Order ID
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.submitIOCOrder = function (
	market,
	type,
	amount,
	price,
	{ source_id, account_id, client_id, access_id, tonce = Date.now() } = {}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		type,
		amount,
		price,
		source_id,
		account_id,
		client_id,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/ioc",
		params,
	});
};

/**
 * [Submit Stop-Limit Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade005_stop_limit_order}
 * @async
 * @function submitStopLimitOrder
 * @param {String} market Market name
 * @param {"sell"|"buy"} type Operation (sell: ask order, buy: bid order)
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {String} price Order price, accurate to 8 decimals
 * @param {String} stop_price Stop price, accurate to 8 decimals
 * @param {Object} options Optional Parameters
 * @param {String} [options.source_id] User-defined number and return
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [options.client_id] client_id is the custom ID of the order.Currently it only supports uppercase and lowercase letters, numbers, hyphens and underscores, and within 32 bytes limit.
 * @param {"true"|"false"} [options.hide] Whether to hide the submission (true: hidden, false: not hidden)
 * @param {"NORMAL"|"IOC"|"FOK"|"MAKER_ONLY"} [options.option] Order strategy (default is NORMAL) (Normal: NORMAL, Immediate or Cancel: IOC, Fill or Kill: FOK, Maker Only: MAKER_ONLY)
 * @param {String} [options.access_id] Key ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.submitStopLimitOrder = function (
	market,
	type,
	amount,
	price,
	stop_price,
	{ source_id, account_id, client_id, hide, option, access_id, tonce = Date.now() } = {}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		type,
		amount,
		price,
		stop_price,
		source_id,
		account_id,
		client_id,
		hide,
		option,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/stop/limit",
		params,
	});
};

/**
 * [Submit Stop-Market Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade006_stop_market_order}
 * @async
 * @function submitStopMarketOrder
 * @param {String} market Market name
 * @param {"sell"|"buy"} type Operation (sell: ask order, buy: bid order)
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {String} stop_price Stop price, accurate to 8 decimals
 * @param {Object} options Optional Parameters
 * @param {String} [options.source_id] User-defined number and return
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [options.client_id] client_id is the custom ID of the order.Currently it only supports uppercase and lowercase letters, numbers, hyphens and underscores, and within 32 bytes limit.
 * @param {"true"|"false"} [options.hide] Whether to hide the submission (true: hidden, false: not hidden)
 * @param {"NORMAL"|"IOC"|"FOK"|"MAKER_ONLY"} [options.option] Order strategy (default is NORMAL) (Normal: NORMAL, Immediate or Cancel: IOC, Fill or Kill: FOK, Maker Only: MAKER_ONLY)
 * @param {String} [options.access_id] Key ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.submitStopMarketOrder = function (
	market,
	type,
	amount,
	stop_price,
	{ source_id, account_id, client_id, hide, option, access_id, tonce = Date.now() } = {}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		type,
		amount,
		stop_price,
		source_id,
		account_id,
		client_id,
		hide,
		option,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/stop/market",
		params,
	});
};

/**
 * [Inquire Order Status]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade007_order_status}
 * @async
 * @function inquireOrderStatus
 * @param {String} id Order No.
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] access_id
 * @param {String} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
// @ts-ignore
module.exports.inquireOrderStatus = function (id, market, { access_id, tonce = Date.now() } = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		id,
		market,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/status",
		params,
	});
};

/**
 * [Inquire Order Status In Batch]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade008_batch_orders_status}
 * @async
 * @function inquireOrderStatusInBatch
 * @param {String} batch_ids Order IDs separated by comma, such as : “1,2,3”
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] access_id
 * @param {String} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
// @ts-ignore
module.exports.inquireOrderStatusInBatch = function (batch_ids, market, { access_id, tonce = Date.now() } = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		batch_ids,
		market,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/status/batch",
		params,
	});
};

/**
 * [Inquire Executed Order Detail]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade009_order_deals}
 * @async
 * @function inquireExecutedOrderDetail
 * @param {String} id Order No.
 * @param {Object} options Optional Parameters
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {Number} [options.page=1] Page number, starting from 1
 * @param {Number} [options.limit=10] Number per page, Max. 100
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.inquireExecutedOrderDetail = function (
	id,
	{ account_id, page = 1, limit = 10, access_id, tonce = Date.now() } = {}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		id,
		account_id,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/deals",
		params,
	});
};

/**
 * [Inquire Stop Order History]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade010_stop_finished_order}
 * @async
 * @function inquireStopOrderHistory
 * @param {Object} options Optional Parameters
 * @param {String} [options.market] Market name
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {Number} [options.page=1] Page number, starting from 1
 * @param {Number} [options.limit=10] Number of entries per page, Max. 100
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.inquireStopOrderHistory = function ({
	market,
	account_id,
	page = 1,
	limit = 10,
	access_id,
	tonce = Date.now(),
} = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		account_id,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/stop/finished",
		params,
	});
};

/**
 * [Inquire Unexecuted Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade011_pending_order}
 * @async
 * @function inquireUnexecutedOrder
 * @param {"sell"|"buy"} type Operation (sell: ask order, buy: bid order)
 * @param {Object} options Optional Parameters
 * @param {String} [options.market] Market name
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [options.client_id] User-defined id
 * @param {Number} [options.page=1] Page number, starting from 1
 * @param {Number} [options.limit=10] Number of entries per page, Max. 100
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.inquireUnexecutedOrder = function (
	type,
	{ market, account_id, client_id, page = 1, limit = 10, access_id, tonce = Date.now() } = {}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		type,
		market,
		account_id,
		client_id,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/pending",
		params,
	});
};

/**
 * [Inquire Order History]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade012_finished_order}
 * @async
 * @function inquireOrderHistory
 * @param {Number} start_time Start time
 * @param {Number} end_time End time
 * @param {Object} options Optional Parameters
 * @param {String} [options.market] Market name
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [options.type] Operation (sell: ask order, buy: bid order)
 * @param {String} [options.client_id] User-defined id
 * @param {Number} [options.stop_order_id] Stop order ID
 * @param {Number} [options.page=1] Page number, starting from 1
 * @param {Number} [options.limit=10] Number of entries per page, Max. 100
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.inquireOrderHistory = function (
	start_time,
	end_time,
	{ market, account_id, type, client_id, stop_order_id, page = 1, limit = 10, access_id, tonce = Date.now() } = {}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		start_time,
		end_time,
		market,
		account_id,
		type,
		client_id,
		stop_order_id,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/finished",
		params,
	});
};

/**
 * [Inquire Unexecuted Stop Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade013_stop_pending_order}
 * @async
 * @function inquireUnexecutedStopOrder
 * @param {Object} options Optional Parameters
 * @param {String} [options.market] Market name
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [options.type] Operation (sell: ask order, buy: bid order)
 * @param {Number} [options.page=1] Page number, starting from 1
 * @param {Number} [options.limit=10] Number of entries per page, Max. 100
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.inquireUnexecutedStopOrder = function ({
	market,
	account_id,
	type,
	page = 1,
	limit = 10,
	access_id,
	tonce = Date.now(),
} = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		account_id,
		type,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/stop/pending",
		params,
	});
};

/**
 * [Inquire User Transaction Records]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade014_user_deals}
 * @async
 * @function inquireUserTransactionRecords
 * @param {Object} options Optional Parameters
 * @param {String} [options.market] Market name
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [options.type] Operation (sell: ask order, buy: bid order)
 * @param {Number} [options.start_time] Start time
 * @param {Number} [options.end_time] End Time
 * @param {Number} [options.page=1] Page number, starting from 1
 * @param {Number} [options.limit=10] Number per page, Max. 100
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.inquireUserTransactionRecords = function ({
	market,
	account_id,
	type,
	start_time,
	end_time,
	page = 1,
	limit = 10,
	access_id,
	tonce = Date.now(),
} = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		account_id,
		type,
		start_time,
		end_time,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/user/deals",
		params,
	});
};

/**
 * [Cancel Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade015_cancel_order}
 * @async
 * @function cancelOrder
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.id] Order ID
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [options.type] Operation (sell: ask order, buy: bid order)
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.cancelOrder = function (market, { id, account_id, type, access_id, tonce = Date.now() } = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		id,
		account_id,
		type,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.DELETE,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/pending",
		params,
	});
};

/**
 * [Cancel Orders In Batch]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade016_batch_cancel_order}
 * @async
 * @function cancelOrdersInBatch
 * @param {String} batch_ids Order IDs separated by comma, such as : “1,2,3”
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.cancelOrdersInBatch = function (batch_ids, market, { account_id, access_id, tonce = Date.now() } = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		batch_ids,
		market,
		account_id,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.DELETE,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/pending/batch",
		params,
	});
};

/**
 * [Cancel All Orders]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade017_cancel_all_orders}
 * @async
 * @function cancelAllOrders
 * @param {String} market Market name
 * @param {Number} account_id Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.cancelAllOrders = function (market, account_id, { access_id, tonce = Date.now() } = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		account_id,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.DELETE,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/pending",
		params,
	});
};

/**
 * [Cancel Unexecuted Stop Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade018_cancle_stop_pending_order}
 * @async
 * @function cancelUnexecutedStopOrder
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [options.type] Operation (sell: ask order, buy: bid order)
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.cancelUnexecutedStopOrder = function (market, { account_id, type, access_id, tonce = Date.now() } = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		account_id,
		type,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.DELETE,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/stop/pending/<int:order_id>",
		params,
	});
};

/**
 * [Cancel All Unexecuted Stop Orders]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade019_cancel_all_stop_pending_order}
 * @async
 * @function cancelAllUnexecutedStopOrders
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.cancelAllUnexecutedStopOrders = function (market, { account_id, access_id, tonce = Date.now() } = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		account_id,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.DELETE,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/stop/pending",
		params,
	});
};

/**
 * [Acquire User Trading Fee Rate]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade020_user_trade_fee}
 * @async
 * @function acquireUserTradingFeeRate
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.acquireUserTradingFeeRate = function () {
	// @ts-ignore
	const { apiSecret } = this;
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/user/trade/fee",
		params,
	});
};

/**
 * [Acquire Market Transaction Info]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade021_market_trade_info}
 * @async
 * @function acquireMarketTransactionInfo
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.acquireMarketTransactionInfo = function () {
	// @ts-ignore
	const { apiSecret } = this;
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/market/trade/info",
		params,
	});
};

/**
 * [Modify a normal order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade022_modify_order}
 * @async
 * @function modifyanormalorder
 * @param {String} market Market name
 * @param {String} id Order No.
 * @param {Object} options Optional Parameters
 * @param {String} [options.amount] Order amount, the minimum order amount is determined by the market
 * @param {String} [options.price] Order price, determined by the market
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.modifyANormalOrder = function (market, id, { amount, price, access_id, tonce = Date.now() } = {}) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		id,
		amount,
		price,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/modify",
		params,
	});
};

/**
 * [Modify Stop Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade023_modify_stop_order}
 * @async
 * @function modifyStopOrder
 * @param {String} market Market name
 * @param {String} id Order No.
 * @param {Object} options Optional Parameters
 * @param {String} [options.amount] Order amount, the minimum order amount is determined by the market
 * @param {String} [options.price] Order price, accurate to 8 decimals
 * @param {String} [options.stop_price] Stop price, accurate to 8 decimals
 * @param {String} [options.access_id] Key Id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Object>} Promise object represents the result of the request
 */
module.exports.modifyStopOrder = function (
	market,
	id,
	{ amount, price, stop_price, access_id, tonce = Date.now() } = {}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		id,
		amount,
		price,
		stop_price,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		baseURL: BASE_URLS.GENERAL,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		url: "/order/stop/modify",
		params,
	});
};
