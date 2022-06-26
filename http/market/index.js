/**
 * Market module.
 * @module http/market
 * @see module:http/market
 */

const axios = require("axios").default;

/**
 * Coinex Market List Results
 * @typedef {Object} MarketListResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Array<String>} data - List All of the market's pairs, applicable to spot and margin markets.
 */

/**
 * Acquire All Market List
 * @async
 * @function acquireAllMarketList
 * @returns {Promise<MarketListResults>} Promise object represents the result of the request
 */
module.exports.acquireAllMarketList = function(){
    return axios({
        url:"/market/list",
    })
}

/**
 * Coinex Market Info Results
 * @typedef {Object} MarketInfoResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Acquire all market details, applicable to spot and margin markets.
 * @property {String} data.name - 	Market name
 * @property {String} data.taker_fee_rate - Taker rate
 * @property {String} data.maker_fee_rate - Maker rate
 * @property {String} data.min_amount - Min. transaction volume
 * @property {String} data.trading_name - Trading currency
 * @property {Number} data.trading_decimal - Trading currency decimal
 * @property {String} data.pricing_name - Pricing currency
 * @property {Number} data.pricing_decimal - Pricing currency decimal
 */

/**
 * Acquire All Market Info
 * @async
 * @function acquireAllMarketInfo
 * @returns {Promise<MarketInfoResults>} Promise object represents the result of the request
 */
module.exports.acquireAllMarketInfo = function(){
    return axios({
        url:"/market/info",
    })
}


module.exports.acquireAllMarketInfo = function(){
    return axios({
        url:"/market/detail",
    })
}

module.exports.acquireAllMarketInfo = function(){
    return axios({
        url:"/market/depth",
    })
}

module.exports.acquireAllMarketInfo = function(){
    return axios({
        url:"/market/deals",
    })
}

module.exports.acquireAllMarketInfo = function(){
    return axios({
        url:"/market/kline",
    })
}