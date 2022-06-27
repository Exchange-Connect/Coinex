/**
 * Coinex Market List Results
 * @typedef {Object} MarketListResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Array<String>} data - List All of the market's pairs, applicable to spot and margin markets.
 * @example
 * {
 *     "code": 0,
 *     "data": [
 *         "LTCBCH",
 *         "ETHBCH",
 *         "ZECBCH",
 *         "DASHBCH"
 *     ],
 *     "message": "Ok"
 * }
 */
//  module.exports.acquireAllMarketList


/**
 * Coinex Market Info Results
 * @typedef {Object} MarketInfoResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Acquire all market details, applicable to spot and margin markets.
 * @property {Object} data.market - An example market (e.g. "BTCUSDT").
 * @property {String} data.market.name - 	Market name
 * @property {String} data.market.taker_fee_rate - Taker rate
 * @property {String} data.market.maker_fee_rate - Maker rate
 * @property {String} data.market.min_amount - Min. transaction volume
 * @property {String} data.market.trading_name - Trading currency
 * @property {Number} data.market.trading_decimal - Trading currency decimal
 * @property {String} data.market.pricing_name - Pricing currency
 * @property {Number} data.market.pricing_decimal - Pricing currency decimal
 * @example
 * {
 *   "code": 0,
 *   "message": "Ok",
 *   "data":
 *   {
 *     "XRPBTC": 
 *     {
 *       "taker_fee_rate": "0.001",
 *       "pricing_name": "BTC",
 *       "trading_name": "XRP",
 *       "min_amount": "0.001",
 *       "name": "XRPBTC",
 *       "trading_decimal": 8,
 *       "maker_fee_rate": "0.001",
 *       "pricing_decimal": 8
 *     } ,
 *     "CETUSDC": 
 *     {
 *       "taker_fee_rate": "0.001",
 *       "pricing_name": "USDC",
 *       "trading_name": "CET",
 *       "min_amount": "0.001",
 *       "name": " CETUSDC",
 *       "trading_decimal": 8,
 *       "maker_fee_rate": "0.001",
 *       "pricing_decimal": 8
 *     }
 *   }
 * }
 */
//  module.exports.acquireAllMarketInfo

/**
 * Coinex Market Info Result
 * @typedef {Object} MarketInfoResult
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Acquire a market detail, applicable to spot and margin markets.
 * @property {String} data.name - 	Market name
 * @property {String} data.taker_fee_rate - Taker rate
 * @property {String} data.maker_fee_rate - Maker rate
 * @property {String} data.min_amount - Min. transaction volume
 * @property {String} data.trading_name - Trading currency
 * @property {Number} data.trading_decimal - Trading currency decimal
 * @property {String} data.pricing_name - Pricing currency
 * @property {Number} data.pricing_decimal - Pricing currency decimal
 * @example
 * {
 *   "code": 0,
 *   "message": "Ok",
 *   "data":
 *     {
 *       "taker_fee_rate": "0.001",
 *       "pricing_name": "USDT",
 *       "trading_name": "BTC" ,
 *       "min_amount": "0.001",
 *       "name": "BTCUSDT",
 *       "trading_decimal": 8,
 *       "maker_fee_rate": "0.001",
 *       "pricing_decimal": 8
 *     }
 * }
 */

//  module.exports.acquireSingleMarketInfo


/**
 * Coinex Market Depth Result
 * @typedef {Object} MarketDepthResult
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Acquire market depth in a single market, suitable for spot and margin markets ( Max. depth 50 ).
 * @property {String} data.last - 	Market name
 * @property {String} data.time - Taker rate
 * @property {Array<Array<String>>} data.asks - Maker rate
 * @property {String} data.asks[][0] - Min. transaction volume
 * @property {String} data.asks[][1] - Trading currency
 * @property {Array<Array<String>>} data.bids - Trading currency decimal
 * @property {String} data.bids[][0] - Pricing currency
 * @property {Number} data.bids[][1] - Pricing currency decimal
 * @example
 * {
 *   "code": 0,
 *   "data": {
 *     "last": "10.00",
 *     "time": 1539764050033,
 *     "asks": [
 *       [
 *         "10.00", 
 *         "0.9999"
 *       ]
 *     ],
 *     "bids": [
 *       [
 *         "10.00",
 *         "1.0000"
 *       ]
 *     ]
 *   },
 *   "message": "Ok"
 * }
 */

//  module.exports.acquireMarketDepth

/**
 * Coinex Transaction Data Results
 * @typedef {Object} TransactionDataResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Results
 * @property {Object} data.id - Transaction ID
 * @property {Number} data.date - Transaction timestamp
 * @property {Number} data.date_ms - Transaction millisecond timestamp
 * @property {String} data.amount - Trading volume
 * @property {String} data.price - Transaction price
 * @property {"buy"|"sell"} data.type - Transaction direction type
 * @example
 * {
 *   "code": 0,
 *   "data": [
 *     {
 *       "amount": "0.0001",        # Transaction amount 
 *       "date": 1494214689,        # Transaction time(s) 
 *       "date_ms": 1494214689067,  # Transaction time(ms)
 *       "id": 5,                   # Transaction No
 *       "price": "10.00",          # Transaction price
 *       "type": "buy"              # Transaction type: buy, sell
 *     }
 *   ],
 *   "message" : "Ok"
 * }
 */

//  module.exports.acquireLatestTransactionData

/**
 * Coinex K-Line Data Results
 * @typedef {Object} KlineDataResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Array<Array>} data - Results
 * @property {Number} data[0] - Timestamp
 * @property {String} data[1] - Opening price
 * @property {String} data[2] - Closing price
 * @property {String} data[3] - Highest price
 * @property {String} data[4] - Lowest price
 * @property {String} data[5] - Trading volume
 * @property {String} data[6] - Transaction amount
 * @example
 * 
 * {
 *   "code": 0,
 *   "data": [
 *     [
 *       1492358400,
 *       "10.0",
 *       "10.0",
 *       "10.0",
 *       "10.0",
 *       "10",
 *       "100",
 *     ]
 *   ],
 *   "message": "Ok"
 * }
 */

//  module.exports.acquireKlineData

/**
 * Coinex Single Market Statistics Result
 * @typedef {Object} SingleMarketStatisticsResult
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Results
 * @property {String} data.date - Server time
 * @property {Object} data.ticker - Ticker Data
 * @property {String} data.ticker.last - Latest transaction price
 * @property {String} data.ticker.buy - Bid1 price
 * @property {String} data.ticker.buy_amount - Bid1 amount
 * @property {String} data.ticker.sell - Ask1 price
 * @property {String} data.ticker.sell_amount - Ask1 amount
 * @property {String} data.ticker.open - 24H opening price
 * @property {String} data.ticker.high - 24H highest price
 * @property {String} data.ticker.low - 24H lowest price
 * @property {String} data.ticker.vol - 24H volume
 * @example
 * 
 * {
 *     "code": 0,
 *     "data": {
 *         "date": 1513865441609,       # server time when returning
 *         "ticker": {
 *             "buy": "10.00",          # buy 1
 *             "buy_amount": " 10.00",  # buy 1 amount
 *             "open": "10",            # highest price
 *             "high": "10",            # highest price
 *             "last": "10.00",         # latest price 
 *             "low": "10 ",            # lowest price
 *             "sell": "10.00",         # sell 1
 *             "sell_amount": "0.78",   # sell 1 amount
 *             "vol": "110"             # 24H volume
 *         }
 *     },
 *   "message" : "Ok"
 * }
 */

//  module.exports.acquireSingleMarketStatistics

/**
 * Coinex All Market Statistics Results
 * @typedef {Object} AllMarketStatisticsResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Results
 * @property {String} data.date - Server time
 * @property {Object} data.ticker - Ticker Data
 * @property {Object} data.ticker.market - Example "market"
 * @property {String} data.ticker.market.last - Latest transaction price
 * @property {String} data.ticker.market.buy - Bid1 price
 * @property {String} data.ticker.market.buy_amount - Bid1 amount
 * @property {String} data.ticker.market.sell - Ask1 price
 * @property {String} data.ticker.market.sell_amount - Ask1 amount
 * @property {String} data.ticker.market.open - 24H opening price
 * @property {String} data.ticker.market.high - 24H highest price
 * @property {String} data.ticker.market.low - 24H lowest price
 * @property {String} data.ticker.market.vol - 24H volume
 * @example
 * 
 * {
 *     "code": 0,
 *     "data": {
 *         "date": 1513865441609,       # server time when returning
 *         "ticker": {
 *             "martket": {
 *                 "buy": "10.00",          # buy 1
 *                 "buy_amount": " 10.00",  # buy 1 amount
 *                 "open": "10",            # highest price
 *                 "high": "10",            # highest price
 *                 "last": "10.00",         # latest price 
 *                 "low": "10 ",            # lowest price
 *                 "sell": "10.00",         # sell 1
 *                 "sell_amount": "0.78",   # sell 1 amount
 *                 "vol": "110"             # 24H volume
 *             }
 *         }
 *     },
 *   "message" : "Ok"
 * }
 */

//  module.exports.acquireAllMarketStatistics

/**
 * Coinex Acquire Currency Rate Results
 * @typedef {Object} CurrencyRateResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Results
 * @property {String} data.Example_to_Exampl3 - Example Market Convertion
 * @example
 * {
 *     "code": 0,
 *     "data": {
 *         "USDT_to_USD": "1.00128491",
 *         "USDC_to_USD": "1",
 *         "BTC_to_USD": "60079.09716983",
 *         "BCH_to_USD": "600.770946",
 *         "ETH_to_USD": "4163.84190845",
 *         "CET_to_USD": "2.00256982"
 *     },
 *     "message": "Success"
 * }
 */

//  module.exports.acquireCurrencyRate

/**
 * Coinex Asset Allocation Results
 * @typedef {Object} AssetAllocationResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Results
 * @property {Object} data.Example-Exampl3 - Allocation Data
 * @property {String} data.Example-Exampl3.can_deposit - Deposit status
 * @property {String} data.Example-Exampl3.can_withdraw - Withdrawal status
 * @property {String} data.Example-Exampl3.deposit_least_amount - Min. deposit amount
 * @property {String} data.Example-Exampl3.withdraw_least_amount - 	Min. withdrawal amount
 * @property {String} data.Example-Exampl3.withdraw_tx_fee - Withdrawal rate
 * @property {String} data.Example-Exampl3.withdrawal_precision - Withdrawal precision
 * @property {String} data.Example-Exampl3.asset - Coin
 * @property {String} data.Example-Exampl3.chain - The protocol type of the coin
 * @example
 * 
 * {
 *     "code": 0,
 *     "data": {
 *         "CET-CSC": {
 *             "asset": "CET",
 *             "chain": "CSC",
 *             "can_deposit": true,
 *             "can_withdraw ": false,
 *             "deposit_least_amount": "1",
 *             "withdraw_least_amount": "1",
 *             "withdraw_tx_fee": "0.1"
 *         },
 *         "CET-ERC20": {
 *             "asset": "CET",
 *             "chain": "ERC20",
 *             "can_deposit": true,
 *             "can_withdraw": false,
 *             "deposit_least_amount": "14",
 *             "withdraw_least_amount": "14",
 *             "withdraw_tx_fee": "14"
 *         }
 *     },
 *     "message": "Success"
 * }
 */

//  module.exports.acquireAssetAllocation

/**
 * Coinex AMM Market Results
 * @typedef {Object} AMMMarketResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Array<String>} data - Results
 * @example
 * {
 *     "code": 0,
 *     "data": [
 *         "CETUSDT",
 *         "USDCUSDT",
 *         "ETHBTC",
 *         "ACMUSDT",
 *         "ARDRUSDT",
 *         "ARDRTUSD",
 *         "AYAUSDT",
 *         "AYAETH",
 *         "KUNBTC",
 *         "KUNBCH",
 *         "KUNETH",
 *         "KUNTUSD",
 *         "LFTBTC",
 *         "PAXUSDT",
 *         "SNXUSDT",
 *         "SNXBTC",
 *         "SNXBCH",
 *         "SNXETH",
 *         "SYSUSDT",
 *         "XRPUSDC",
 *         "XRPETH"
 *     ],
 *     "message": "Success"
 * }
 */

//  module.exports.acquireAMMMarketList

/**
 * Coinex Margin Market Results
 * @typedef {Object} MarginMarketResults
 * @property {Number} code - Indicates the coresponding Endpoint Error Code.
 * @property {Boolean} message - Response message.
 * @property {Object} data - Results
 * @property {Number} data.ExampleExampl3 - Pair's Result
 * @example
 * {
 *     "code": 0,
 *     "data": {
 *         "CETBCH": 3,
 *         "BTCUSDC": 4,
 *         "XRPPAX": 7,
 *         "ETHUSDC": 9,
 *         "BCHUSDT": 10,
 *         "LTCUSDT": 11,
 *         "XRPUSDT": 12,
 *         "HCBTC": 13,
 *         "ETHUSDT": 1,
 *         "ETCUSDT": 15,
 *         "BTCUSDT": 2,
 *         "ETHBTC": 16,
 *         "HCUSDT": 17,
 *         "BSVUSDT": 19,
 *         "OMGUSDT": 20,
 *         "OMGUSDC": 22,
 *         "OMGTUSD": 23,
 *         "BANUSDT": 24,
 *         "BANUSDC": 25
 *     },
 *     "message": "Success"
 * }
 */

//  module.exports.acquireMarginMarketList