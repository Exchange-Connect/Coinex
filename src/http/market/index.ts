/**
 * @fileOverview Market API Endpoints
 * @module Market
 */
const { BASE_URLS, METHOD_TYPE } = require("../../constants");
const { executeRequest } = require("../../libs");
const { signParams } = require("../../utils");

/**
 * Acquire All Market List
 * @async
 * @function acquireAllMarketList
 * @returns {Promise<MarketListResults>} Promise object represents the result of the request
 */
export function acquireAllMarketList(): Promise<string[]> {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/market/list",
		params,
	});
}

/**
 * Acquire All Market Info
 * @async
 * @function acquireAllMarketInfo
 * @returns {Promise<MarketInfoResults>} Promise object represents the result of the request
 */
export function acquireAllMarketInfo() {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/market/info",
		params,
	});
}

/**
 * Acquire Single Market Info
 * @async
 * @function acquireSingleMarketInfo
 * @param {String} market Market Name
 * @returns {Promise<MarketInfoResult>} Promise object represents the result of the request
 */
export function acquireSingleMarketInfo(market: string) {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {
		market,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/market/detail",
		params,
	});
}

/**
 * Acquire Market Depth
 * @async
 * @function acquireMarketDepth
 * @param {String} market Market Name
 * @param {'0'|'0.1'|'0.01'|'0.001'|'0.0001'|'0.00001'|'0.000001'|'0.0000001'|'0.00000001'} merge Depth Sequence Merge
 * @param {Object} options Optional Parameters
 * @param {5|10|20|50} [options.limit=20]
 * @returns {Promise<MarketDepthResult>} Promise object represents the result of the request
 */
export function acquireMarketDepth(market: string, merge: string, { limit }: { limit: number } = { limit: 20 }) {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {
		market,
		merge,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/market/depth",
		params,
	});
}

/**
 * Acquire Latest Transaction Data
 * @async
 * @function acquireMarketDepth
 * @description Get the latest transaction data of a single market, applicable to spot and margin markets
 * @param {String} market Market Name
 * @param {Object} [options={}] Optional Parameters
 * @param {Number} [options.last_id=0] Transaction ID, 0 means get from the latest record
 * @param {Number} [options.limit=1000] ( Max. 1000 )
 * @returns {Promise<TransactionDataResults>} Promise object represents the result of the request
 */
// @ts-ignore
export function acquireLatestTransactionData(market: string, { last_id, limit }: { last_id: number, limit: number } = { last_id: 0, limit: 1000 }) {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {
		market,
		last_id,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/market/deals",
		params: {
			market,
			last_id,
			limit,
		},
	});
}

/**
 * Acquire K-Line Data
 * @async
 * @function acquireKlineData
 * @description Get k-line data of a single market, applicable to spot and margin markets
 * @param {String} market Market Name
 * @param {"1min"|"3min"|"5min"|"15min"|"30min"|"1hour"|"4hour"|"6hour"|"1day"|"3day"|"1week"} type Timeframe
 * @param {Object} [options={}] Optional Parameters
 * @param {Number} [options.limit=1000] ( Max. 1000 )
 * @returns {Promise<KlineDataResults>} Promise object represents the result of the request
 */
// @ts-ignore
export function acquireKlineData(market, type, { limit }: { limit: number } = { limit: 1000 }) {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {
		market,
		type,
		limit,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/market/kline",
		params,
	});
}

/**
 * Acquire Single Market Statistics
 * @async
 * @function acquireSingleMarketStatistics
 * @param {String} market Market Name
 * @returns {Promise<SingleMarketStatisticsResult>} Promise object represents the result of the request
 */
export function acquireSingleMarketStatistics(market: string) {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {
		market,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/market/ticker",
		params,
	});
}

/**
 * Acquire All Market Statistics
 * @async
 * @function acquireAllMarketStatistics
 * @returns {Promise<AllMarketStatisticsResults>} Promise object represents the result of the request
 */
export function acquireAllMarketStatistics() {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/market/ticker/all",
		params,
	});
}

/**
 * Acquire Currency Rate
 * @async
 * @function acquireCurrencyRate
 * @returns {Promise<CurrencyRateResults>} Promise object represents the result of the request
 */
export function acquireCurrencyRate() {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/common/currency/rate",
		params,
	});
}

/**
 * Acquire Asset Allocation
 * @async
 * @function acquireAssetAllocation
 * @param {String} coin_type Coin name
 * @returns {Promise<AssetAllocationResults>} Promise object represents the result of the request
 */
export function acquireAssetAllocation(coin_type: string) {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = { coin_type };

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/common/asset/config",
		params,
	});
}

/**
 * Acquire AMM Market List
 * @async
 * @function acquireAMMMarketList
 * @returns {Promise<AMMMarketResults>} Promise object represents the result of the request
 */
export function acquireAMMMarketList() {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/amm/market",
		params,
	});
}

/**
 * Acquire Margin Market List
 * @async
 * @function acquireMarginMarketList
 * @returns {Promise<MarginMarketResults>} Promise object represents the result of the request
 */
export function acquireMarginMarketList() {
	// @ts-ignore
	const apiSecret = this.apiSecret;
	const params = {};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/margin/market",
		params,
	});
}
