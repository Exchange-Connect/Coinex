/**
 * Coinex Account Balance Info Results
 * @typedef {Object} AccountBalanceInfoResults
 * @property {Object} example - Example Currency
 * @property {Object} example.available - Amount available
 * @property {Object} example.frozen - Amount frozen
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
 * @property {Object} account - Example Sub-Account
 * @property {Object} account.example - Example Currency
 * @property {Object} account.example.available - Amount available
 * @property {Object} account.example.frozen - Amount frozen
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