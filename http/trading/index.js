/**
 * @fileOverview Trading API Endpoints
 * @module Trading
 * @requires axios
 */

const axios = require("axios").default;
const { METHOD_TYPE } = require("@constants/index");


/**
 * [Submit Limit Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade001_limit_order}
 * @async
 * @function submitLimitOrder
 * @param {String} access_id Key ID
 * @param {String} market Market name
 * @param {"sell"|"buy"} type Operation (sell: ask order, buy: bid order)
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {String} price Order price, accurate to 8 decimals
 * @param {String} [source_id] User-defined number and return
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [client_id] client_id is the custom ID of the order.Currently it only supports uppercase and lowercase letters, numbers, hyphens and underscores, and within 32 bytes limit.
 * @param {"true"|"false"} [hide] Whether to hide the submission (true: hidden, false: not hidden)
 * @param {"NORMAL"|"IOC"|"FOK"|"MAKER_ONLY"} [option] Order strategy (default is NORMAL) (Normal: NORMAL, Immediate or Cancel: IOC, Fill or Kill: FOK, Maker Only: MAKER_ONLY)
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<SubmitLimitOrderResult>} Promise object represents the result of the request
 */
module.exports.submitLimitOrder = function(access_id, market, type, amount, price, source_id, account_id, client_id, hide, option, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.POST,
        url: "/order/limit",
        params: {
            access_id,
            market,
            type,
            amount,
            price,
            source_id,
            account_id,
            client_id,
            hide,
            option,
            tonce,
        }
    })
}

/**
 * [Submit Limit Orders In Batch]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade002_batch_limit_orders}
 * @async
 * @function submitLimitOrdersInBatch
 * @param {String} access_id access_id
 * @param {String} batch_orders Multi-order json format string //TODO: Needs to be described
 * @param {String} market Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitLimitOrdersInBatch = function(access_id, batch_orders, market, account_id, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.POST,
        url: "/order/limit/batch",
        params: {
            access_id,
            batch_orders,
            market,
            account_id,
            tonce,
        }
    })
}

/**
 * [Submit Market Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade003_market_order}
 * @async
 * @function submitMarketOrder
 * @param {String} access_id access_id
 * @param {String} market Market name
 * @param {"sell"|"buy"} type (sell: ask order, buy: bid order)
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [client_id] User-defined order id
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitMarketOrder = function(access_id, market, type, amount, account_id, client_id, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.POST,
        url: "/order/market",
        params: {
            access_id,
            market,
            type,
            amount,
            account_id,
            client_id,
            tonce,
        }
    })
}

/**
 * [Submit IOC Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade004_IOC_order}
 * @async
 * @function submitIOCOrder
 * @param {String} access_id access_id
 * @param {String} market Market name
 * @param {"sell"|"buy"} type (sell: ask order, buy: bid order)
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {String} price Order price, determined by the market
 * @param {String} [source_id] User-defined id
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [client_id] User-defined order id
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitIOCOrder = function(access_id, market, type, amount, price, source_id, account_id, client_id, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.POST,
        url: "/order/ioc",
        params: {
            access_id,
            market,
            type,
            amount,
            price,
            source_id,
            account_id,
            client_id,
            tonce,
        }
    })
}

/**
 * [Submit Stop-Limit Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade005_stop_limit_order}
 * @async
 * @function submitStopLimitOrder
 * @param {String} access_id Key ID
 * @param {String} market Market name
 * @param {"sell"|"buy"} type Operation (sell: ask order, buy: bid order)
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {String} price Order price, accurate to 8 decimals
 * @param {String} stop_price Stop price, accurate to 8 decimals
 * @param {String} [source_id] User-defined number and return
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [client_id] client_id is the custom ID of the order.Currently it only supports uppercase and lowercase letters, numbers, hyphens and underscores, and within 32 bytes limit.
 * @param {"true"|"false"} [hide] Whether to hide the submission (true: hidden, false: not hidden)
 * @param {"NORMAL"|"IOC"|"FOK"|"MAKER_ONLY"} [option] Order strategy (default is NORMAL) (Normal: NORMAL, Immediate or Cancel: IOC, Fill or Kill: FOK, Maker Only: MAKER_ONLY)
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitStopLimitOrder = function(access_id, market, type, amount, price, stop_price, source_id, account_id, client_id, hide, option, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.POST,
        url: "/order/stop/limit",
        params: {
            access_id,
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
            tonce,
        }
    })
}

/**
 * [Submit Stop-Market Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade006_stop_market_order}
 * @async
 * @function submitStopMarketOrder
 * @param {String} access_id Key ID
 * @param {String} market Market name
 * @param {"sell"|"buy"} type Operation (sell: ask order, buy: bid order)
 * @param {String} amount Order amount, the minimum order amount is determined by the market
 * @param {String} stop_price Stop price, accurate to 8 decimals
 * @param {String} [source_id] User-defined number and return
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {String} [client_id] client_id is the custom ID of the order.Currently it only supports uppercase and lowercase letters, numbers, hyphens and underscores, and within 32 bytes limit.
 * @param {"true"|"false"} [hide] Whether to hide the submission (true: hidden, false: not hidden)
 * @param {"NORMAL"|"IOC"|"FOK"|"MAKER_ONLY"} [option] Order strategy (default is NORMAL) (Normal: NORMAL, Immediate or Cancel: IOC, Fill or Kill: FOK, Maker Only: MAKER_ONLY)
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitStopMarketOrder = function(access_id, market, type, amount, stop_price, source_id, account_id, client_id, hide, option, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.POST,
        url: "/order/stop/market",
        params: {
            access_id,
            market,
            type,
            amount,
            stop_price,
            source_id,
            account_id,
            client_id,
            hide,
            option,
            tonce,
        }
    })
}

/**
 * [Inquire Order Status]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade007_order_status}
 * @async
 * @function inquireOrderStatus
 * @param {String} access_id access_id
 * @param {String} id Order No.
 * @param {String} market Market name
 * @param {String} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
 module.exports.inquireOrderStatus = function(access_id, id, market, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/status",
        params: {
            access_id,
            id,
            market,
            tonce,
        }
    })
}


/**
 * [Inquire Order Status In Batch]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade008_batch_orders_status}
 * @async
 * @function inquireOrderStatusInBatch
 * @param {String} access_id access_id
 * @param {String} batch_ids Order IDs separated by comma, such as : “1,2,3”
 * @param {String} market Market name
 * @param {String} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
 module.exports.inquireOrderStatusInBatch = function(access_id, batch_ids, market, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/status/batch",
        params: {
            access_id,
            batch_ids,
            market,
            tonce,
        }
    })
}

/**
 * [Inquire Executed Order Detail]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade009_order_deals}
 * @async
 * @function inquireExecutedOrderDetail
 * @param {String} access_id access_id
 * @param {String} id Order No.
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {Number} [page=1] Page number, starting from 1
 * @param {Number} [limit=10] Number per page, Max. 100
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.inquireExecutedOrderDetail = function(access_id, id, account_id, page=1, limit=10, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/deals",
        params: {
            access_id,
            id,
            account_id,
            page,
            limit,
            tonce,
        }
    })
}

/**
 * [Inquire Stop Order History]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade010_stop_finished_order}
 * @async
 * @function inquireStopOrderHistory
 * @param {String} access_id access_id
 * @param {String} [market] Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {Number} [page=1] Page number, starting from 1
 * @param {Number} [limit=10] Number of entries per page, Max. 100
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.inquireStopOrderHistory = function(access_id, market, account_id, page=1, limit=10, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/stop/finished",
        params: {
            access_id,
            market,
            account_id,
            page,
            limit,
            tonce,
        }
    })
}

/**
 * [Inquire Unexecuted Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade011_pending_order}
 * @async
 * @function inquireUnexecutedOrder
 * @param {String} access_id access_id
 * @param {String} [market] Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} type Operation (sell: ask order, buy: bid order)
 * @param {String} [client_id] User-defined id
 * @param {Number} [page=1] Page number, starting from 1
 * @param {Number} [limit=10] Number of entries per page, Max. 100
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.inquireUnexecutedOrder = function(access_id, market, account_id, type, client_id, page=1, limit=10, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/pending",
        params: {
            access_id,
            market,
            account_id,
            type,
            client_id,
            page,
            limit,
            tonce,
        }
    })
}

/**
 * [Inquire Order History]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade012_finished_order}
 * @async
 * @function inquireOrderHistory
 * @param {String} access_id access_id
 * @param {Number} start_time Start time
 * @param {Number} end_time End time
 * @param {String} [market] Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [type] Operation (sell: ask order, buy: bid order)
 * @param {String} [client_id] User-defined id
 * @param {Number} [stop_order_id] Stop order ID
 * @param {Number} [page=1] Page number, starting from 1
 * @param {Number} [limit=10] Number of entries per page, Max. 100
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.inquireOrderHistory = function(access_id, start_time, end_time, market, account_id, type, client_id, stop_order_id, page=1, limit=10, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/finished",
        params: {
            access_id,
            start_time,
            end_time,
            market,
            account_id,
            type,
            client_id,
            stop_order_id,
            page,
            limit,
            tonce,
        }
    })
}

/**
 * [Inquire Unexecuted Stop Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade013_stop_pending_order}
 * @async
 * @function inquireUnexecutedStopOrder
 * @param {String} access_id access_id
 * @param {String} [market] Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [type] Operation (sell: ask order, buy: bid order)
 * @param {Number} [page=1] Page number, starting from 1
 * @param {Number} [limit=10] Number of entries per page, Max. 100
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.inquireUnexecutedStopOrder = function(access_id, market, account_id, type, page=1, limit=10, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/stop/pending",
        params: {
            access_id,
            market,
            account_id,
            type,
            page,
            limit,
            tonce,
        }
    })
}

/**
 * [Inquire User Transaction Records]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade014_user_deals}
 * @async
 * @function inquireUserTransactionRecords
 * @param {String} access_id access_id
 * @param {String} [market] Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [type] Operation (sell: ask order, buy: bid order)
 * @param {Number} [start_time] Start time
 * @param {Number} [end_time] End Time
 * @param {Number} [page=1] Page number, starting from 1
 * @param {Number} [limit=10] Number per page, Max. 100
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.inquireUserTransactionRecords = function(access_id, market, account_id, type, start_time, end_time, page=1, limit=10, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/user/deals",
        params: {
            access_id,
            market,
            account_id,
            type,
            start_time,
            end_time,
            page,
            limit,
            tonce,
        }
    })
}

/**
 * [Cancel Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade015_cancel_order}
 * @async
 * @function cancelOrder
 * @param {String} access_id access_id
 * @param {String} market Market name
 * @param {Number} [id] Order ID
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [type] Operation (sell: ask order, buy: bid order)
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelOrder = function(access_id, market, id, account_id, type, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.DELETE,
        url: "/order/pending",
        params: {
            access_id,
            market,
            id,
            account_id,
            type,
            tonce,
        }
    })
}

/**
 * [Cancel Orders In Batch]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade016_batch_cancel_order}
 * @async
 * @function cancelOrdersInBatch
 * @param {String} access_id access_id
 * @param {String} batch_ids Order IDs separated by comma, such as : “1,2,3”
 * @param {String} market Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelOrdersInBatch = function(access_id, batch_ids, market, account_id, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.DELETE,
        url: "/order/pending/batch",
        params: {
            access_id,
            batch_ids,
            market,
            account_id,
            tonce,
        }
    })
}

/**
 * [Cancel All Orders]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade017_cancel_all_orders}
 * @async
 * @function cancelAllOrders
 * @param {String} access_id access_id
 * @param {String} market Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelAllOrders = function(access_id, market, account_id, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.DELETE,
        url: "/order/pending",
        params: {
            access_id,
            market,
            account_id,
            tonce,
        }
    })
}

/**
 * [Cancel Unexecuted Stop Order]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade018_cancle_stop_pending_order}
 * @async
 * @function cancelUnexecutedStopOrder
 * @param {String} access_id access_id
 * @param {String} market Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {"sell"|"buy"} [type] Operation (sell: ask order, buy: bid order)
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelUnexecutedStopOrder = function(access_id, market, account_id, type, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.DELETE,
        url: "/order/stop/pending/<int:order_id>",
        params: {
            access_id,
            market,
            account_id,
            type,
            tonce,
        }
    })
}

/**
 * [Cancel All Unexecuted Stop Orders]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade019_cancel_all_stop_pending_order}
 * @async
 * @function cancelAllUnexecutedStopOrders
 * @param {String} access_id access_id
 * @param {String} market Market name
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See Acquire Market Info in Margin Account
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelAllUnexecutedStopOrders = function(access_id, market, account_id, tonce=Date.now()){
    return axios({
        method: METHOD_TYPE.DELETE,
        url: "/order/stop/pending",
        params: {
            access_id,
            market,
            account_id,
            tonce,
        }
    })
}

/**
 * [Acquire User Trading Fee Rate]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade020_user_trade_fee}
 * @async
 * @function acquireUserTradingFeeRate
 * @returns {Promise<>} Promise object represents the result of the request
 */
 module.exports.acquireUserTradingFeeRate = function(){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/user/trade/fee",
    })
}

/**
 * [Acquire Market Transaction Info]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot003_trade021_market_trade_info}
 * @async
 * @function acquireMarketTransactionInfo
 * @returns {Promise<>} Promise object represents the result of the request
 */
 module.exports.acquireMarketTransactionInfo = function(){
    return axios({
        method: METHOD_TYPE.GET,
        url: "/order/market/trade/info",
    })
}