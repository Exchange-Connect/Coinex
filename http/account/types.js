/**
 * Coinex Account Balance Info Results
 * @typedef {Object} AccountBalanceInfoResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - List All of the market's pairs, applicable to spot and margin markets.
 * @property {Object} data.example - Example Currency
 * @property {Object} data.example.available - Amount available
 * @property {Object} data.example.frozen - Amount frozen
 * @example
 * {
 *     "code": 0,
 *     "data": {
 *         "BTC": {
 *             "available": "9080.84156954",
 *             "frozen": "1"
 *         },
 *         "USDT": {
 *             "available" : "43724611.65252752",
 *             "frozen": "1897.84472856"
 *         },
 *         "CET": {
 *             "available": "6524.13695056",
 *             "frozen": "0"
 *         },
 *         "ETH": {
 *             " available": "10000",
 *             "frozen": "0"
 *         }
 *     },
 *     "message": "Success"
 * }
 */
// module.exports.acquireAccountBalanceInfo

/**
 * Coinex Sub Account Balance Info Results
 * @typedef {Object} SubAccountBalanceInfoResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - List All of the market's pairs, applicable to spot and margin markets.
 * @property {Object} data.account - Example Sub-Account
 * @property {Object} data.account.example - Example Currency
 * @property {Object} data.account.example.available - Amount available
 * @property {Object} data.account.example.frozen - Amount frozen
 * @example
 * {
 *     "code": 0,
 *     "data": {
 *         "sun": {
 *             "BTC": {
 *                 "available": "99",
 *                 "frozen": "0"
 *             }
 *         }
 *     },
 *     "message": "Success"
 * }
 */
// module.exports.acquireBalanceInSubAccount