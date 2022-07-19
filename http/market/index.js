/**
 * @fileOverview Market API Endpoints
 * @module Market
 * @requires axios
 */
const axios = require("axios").default;

/**
 * Acquire All Market List
 * @async
 * @function acquireAllMarketList
 * @returns {Promise<MarketListResults>} Promise object represents the result of the request
 */
module.exports.acquireAllMarketList = function () {
	return axios({
		url: "/market/list",
	});
};

/**
 * Acquire All Market Info
 * @async
 * @function acquireAllMarketInfo
 * @returns {Promise<MarketInfoResults>} Promise object represents the result of the request
 */
module.exports.acquireAllMarketInfo = function () {
	return axios({
		url: "/market/info",
	});
};

/**
 * Acquire Single Market Info
 * @async
 * @function acquireSingleMarketInfo
 * @param {String} market Market Name
 * @returns {Promise<MarketInfoResult>} Promise object represents the result of the request
 */
module.exports.acquireSingleMarketInfo = function (market) {
	return axios({
		url: "/market/detail",
		params: {
			market,
		},
	});
};

/**
 * Acquire Market Depth
 * @async
 * @function acquireMarketDepth
 * @param {String} market Market Name
 * @param {'0'|'0.1'|'0.01'|'0.001'|'0.0001'|'0.00001'|'0.000001'|'0.0000001'|'0.00000001'} merge Depth Sequence Merge
 * @param {5|10|20|50} [limit=20]
 * @returns {Promise<MarketDepthResult>} Promise object represents the result of the request
 */
module.exports.acquireMarketDepth = function (market, merge, limit = 20) {
	return axios({
		url: "/market/depth",
		params: {
			market,
			merge,
			limit,
		},
	});
};

/**
 * Acquire Latest Transaction Data
 * @async
 * @function acquireMarketDepth
 * @description Get the latest transaction data of a single market, applicable to spot and margin markets
 * @param {String} market Market Name
 * @param {Number} last_id Transaction ID, 0 means get from the latest record
 * @param {Number} [limit=100] ( Max. 1000 )
 * @returns {Promise<TransactionDataResults>} Promise object represents the result of the request
 */
module.exports.acquireLatestTransactionData = function (market, last_id, limit = 100) {
	return axios({
		url: "/market/deals",
		params: {
			market,
			last_id,
			limit,
		},
	});
};

/**
 * Acquire K-Line Data
 * @async
 * @function acquireKlineData
 * @description Get k-line data of a single market, applicable to spot and margin markets
 * @param {String} market Market Name
 * @param {"1min"|"3min"|"5min"|"15min"|"30min"|"1hour"|"4hour"|"6hour"|"1day"|"3day"|"1week"} type Timeframe
 * @param {Number} [limit=100] ( Max. 1000 )
 * @returns {Promise<KlineDataResults>} Promise object represents the result of the request
 */
module.exports.acquireKlineData = function (market, type, limit = 100) {
	return axios({
		url: "/market/kline",
		params: {
			market,
			type,
			limit,
		},
	});
};

/**
 * Acquire Single Market Statistics
 * @async
 * @function acquireSingleMarketStatistics
 * @param {String} market Market Name
 * @returns {Promise<SingleMarketStatisticsResult>} Promise object represents the result of the request
 */
module.exports.acquireSingleMarketStatistics = function (market) {
	return axios({
		url: "/market/ticker",
		params: {
			market,
		},
	});
};

/**
 * Acquire All Market Statistics
 * @async
 * @function acquireAllMarketStatistics
 * @returns {Promise<AllMarketStatisticsResults>} Promise object represents the result of the request
 */
module.exports.acquireAllMarketStatistics = function () {
	return axios({
		url: "/market/ticker/all",
	});
};

/**
 * Acquire Currency Rate
 * @async
 * @function acquireCurrencyRate
 * @returns {Promise<CurrencyRateResults>} Promise object represents the result of the request
 */
module.exports.acquireCurrencyRate = function () {
	return axios({
		url: "/common/currency/rate",
	});
};

/**
 * Acquire Asset Allocation
 * @async
 * @function acquireAssetAllocation
 * @param {String} coin_type Coin name
 * @returns {Promise<AssetAllocationResults>} Promise object represents the result of the request
 */
module.exports.acquireAssetAllocation = function (coin_type) {
	return axios({
		url: "/common/asset/config",
		params: {
			coin_type,
		},
	});
};

/**
 * Acquire AMM Market List
 * @async
 * @function acquireAMMMarketList
 * @returns {Promise<AMMMarketResults>} Promise object represents the result of the request
 */
module.exports.acquireAMMMarketList = function () {
	return axios({
		url: "/amm/market",
	});
};

/**
 * Acquire Margin Market List
 * @async
 * @function acquireMarginMarketList
 * @returns {Promise<MarginMarketResults>} Promise object represents the result of the request
 */
module.exports.acquireMarginMarketList = function () {
	return axios({
		url: "/margin/market",
	});
};