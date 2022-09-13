/** Coinex Market List Results
 * @typedef {Object} MarketListResult
 * @property {String} name Market name
 * @property {1|2} type Contract type (1: Linear contract, 2: Inverse contract)
 * @property {String} stock Base coin
 * @property {String} money Price coin
 * @property {Number} fee_prec Rate decimal
 * @property {Number} stock_prec Base coin decimal
 * @property {Number} money_prec Price coin decimal
 * @property {Number} multiplier Multiplier
 * @property {Number} amount_prec Quantity decimal
 * @property {String} amount_min Minimum amount
 * @property {String} tick_size Price granularity
 * @property {String[]} leverages Margin list
 * @property {Boolean} available Whether the market is open
 * @example
 * {
 *     "name": "BTCUSD",
 *     "type": 2,
 *     "stock": "BTC",
 *     "money": "USD",
 *     "fee_prec": 4,
 *     "stock_prec": 8,
 *     "money_prec": 8,
 *     "multiplier": 1,
 *     "amount_prec": 0,
 *     "amount_min": "10",
 *     "tick_size": "0.5",
 *     "leverages": ["3", "5", "8", "10", "15", "20", "30", "50", "100"],
 *     "available": true
 * }
 */
// marketList


/** Coinex Market List Results
 * @typedef {Object} PositionLevelResults
 * @property {Array[]} example Example Market (e.g. BTCUSDT)
 * @property {String} example[][0] Amount
 * @property {String} example[][1] Leverage
 * @property {String} example[][2] Maintenance margin rate
 * @example
 * {
 *   "BTCUSD": [
 *     ["1000", "100", "0.005"],
 *     ["10000", "50", "0.01"],
 *     ["15000", "30" , "0.015"],
 *     ["25000", "20", "0.02"],
 *     ["50000", "15", "0.025"],
 *     ["75000", "10", "0.03"] ,
 *     ["80000", "6", "0.035"],
 *     ["110000", "6", "0.04"],
 *     ["120000", "5", "0.045"],
 *     ["130000 ", "5", "0.05"],
 *     ["140000", "5", "0.055"],
 *     ["150000", "3", "0.06"]
 *   ]
 * }
 */
// positionLevel