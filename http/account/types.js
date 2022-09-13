/**
 * Coinex Account Balance Info Results
 * @typedef {Object} AccountBalanceInfoResults
 * @property {Object} example - Example Currency
 * @property {Object} example.available - Amount available
 * @property {Object} example.frozen - Amount frozen
 * @example
 * {
 *     "BTC": {
 *         "available": "9080.84156954",
 *         "frozen": "1"
 *     },
 *     "USDT": {
 *         "available" : "43724611.65252752",
 *         "frozen": "1897.84472856"
 *     },
 *     "CET": {
 *         "available": "6524.13695056",
 *         "frozen": "0"
 *     },
 *     "ETH": {
 *         " available": "10000",
 *         "frozen": "0"
 *     }
 * }
 */
// acquireAccountBalanceInfo

/**
 * Coinex Sub Account Balance Info Results
 * @typedef {Object} SubAccountBalanceInfoResults
 * @property {Object} account - Example Sub-Account
 * @property {Object} account.example - Example Currency
 * @property {Object} account.example.available - Amount available
 * @property {Object} account.example.frozen - Amount frozen
 * @example
 * {
 *     "example-account": {
 *         "BTC": {
 *             "available": "99",
 *             "frozen": "0"
 *         }
 *     }
 * }
 */
// acquireBalanceInSubAccount


/**
 * Coinex AMM Account Balance Info Result
 * @typedef {Object} AMMAccountBalanceInfoResult
 * @property {String} market
 * @property {String} base_asset
 * @property {String} quote_asset
 * @property {String} base_amount
 * @property {String} quote_amount
 * @example
 * {
 *     "market": "ETHBTC",
 *     "base_asset": "ETH",
 *     "quote_asset": "BTC",
 *     "base_amount": "944.24670636 ",
 *     "quote_amount": "65.46687196"
 * }
 */
// acquireBalanceInAMMAccount

/**
 * Coinex Financial Account Balance Info Result
 * @typedef {Object} FinancialAccountBalanceInfoResult
 * @property {String} asset
 * @property {String} available
 * @property {String} frozen
 * @example
 * {
 *     "asset": "CET",
 *     "available": "0",
 *     "frozen": "0"
 * }
 */
// acquireBalanceInFinancialAccount

/** Coinex Credit Info Info Result
 * @typedef {Object} CreditInfoResult
 * @property {String} withdraw_rate
 * @property {String} trade_rate
 * @property {String} current_balance
 * @property {String} unflat_balance
 * @property {String} can_withdraw_balance
 * @property {String} can_trade_balance
 * @property {String} current_rate
 */
// acquireCreditInfoInAccount

/** Coinex Margin Account Credit Info Result
 * @typedef {Object} MarginAccountCreditInfoResult
 * @property {String} withdraw_rate
 * @property {String} trade_rate
 * @property {String} current_balance
 * @property {String} unflat_balance
 * @property {String} can_withdraw_balance
 * @property {String} can_trade_balance
 * @property {String} current_rate
 * @example
 * {
 *     "withdraw_rate": "1.4",
 *     "trade_rate": "2",
 *     "current_balance": "6506574.34065785",
 *     "unflat_balance": "6336010.61421221",
 *     "can_withdraw_balance": "6506574.34065785",
 *     "can_trade_balance": "6506574.34065785",
 *     "current_rate": "1.02691973"
 * }
 */

//FIX: it's duplicate
/** Coinex Margin Account Credit Info Result
 * @typedef {Object} MarginAccountCreditInfoResult2
 * @property {Number} account_id
 * @property {Number} leverage
 * @property {String} market_type
 * @property {String} sell_asset_type
 * @property {String} buy_asset_type
 * @property {Object} balance
 * @property {String} balance.sell_type
 * @property {String} balance.buy_type
 * @property {Object} frozen
 * @property {String} frozen.sell_type
 * @property {String} frozen.buy_type
 * @property {Object} loan
 * @property {String} loan.sell_type
 * @property {String} loan.buy_type
 * @property {Object} interest
 * @property {String} interest.sell_type
 * @property {String} interest. buy_type
 * @property {Object} can_transfer
 * @property {String} can_transfer.sell_type
 * @property {String} can_transfer.buy_type
 * @property {String} warn_rate
 * @property {String} liquidation_price
 * @example
 * {
 *     "account_id": 2,
 *     "leverage": 10,
 *     "market_type": "BTCUSDT",
 *     "sell_asset_type": "BTC",
 *     "buy_asset_type" : "USDT",
 *     "balance": {
 *         "sell_type": "2",
 *         "buy_type": "0"
 *     },
 *     "frozen": {
 *         "sell_type": "0",
 *         "buy_type" : "0"
 *     },
 *     "loan": {
 *         "sell_type": "0",
 *         "buy_type": "0"
 *     },
 *     "interest": {
 *         "sell_type": "0",
 *         " buy_type": "0"
 *     },
 *     "can_transfer": {
 *         "sell_type": "2",
 *         "buy_type": "0"
 *     },
 *     "warn_rate": "",
 *     "liquidation_price": ""
 * }
 */
// acquireMarketInfoInMarginAccount

/** Coinex Margin Account Settings Result
 * @typedef {Object} MarginAccountSettingsResult
 * @property {String} market
 * @property {Number} leverage
 * @property {String} day_rate
 * @property {Object} example
 * @property {String} example.min_amount
 * @property {String} example.max_amount
 * @example
 * {
 *     "market": "BTCUSDT",
 *     "leverage": 10,
 *     "day_rate": "0.0009",
 *     "BTC": {
 *         "min_amount": "0.001",
 *         "max_amount": "100"
 *     },
 *     "USDT": {
 *         "min_amount": "1",
 *         "max_amount": "2000000"
 *     }
 * }
 */
// inquireMarginAccountSettings

/** Coinex Balance In Credit Account Result
 * @typedef {Object} BalanceInCreditAccountResult
 * @property {string} asset
 * @property {string} unflat_amount
 * @property {string} interest_amount
 * @example
 * [
 *     {
 *         "asset": "USDT",
 *         "unflat_amount": "98.99999998",
 *         "interest_amount": "259.29744279"
 *     }
 * ]
 */
// acquireBalanceInCreditAccount

/** Coinex Deposit Record Result
 * @typedef {Object} DepositRecordResult
 * @property {Boolean} has_next Does have next page?
 * @property {Number} curr_page Current Page
 * @property {Number} count Total Count
 * @property {Number} total Total Records
 * @property {Number} total_page Total pages
 * @property {Object[]} data Records
 * @property {Number} data[].coin_deposit_id Deposit id
 * @property {Number} data[].create_time Creation timestamp
 * @property {String} data[].amount Deposit amount
 * @property {String} data[].amount_display Show deposit amount
 * @property {String} data[].diff_amount
 * @property {String} data[].min_amount Min. deposit value
 * @property {String} data[].actual_amount Actual deposit amount
 * @property {String} data[].actual_amount_display Show actual deposit amount
 * @property {Number} data[].confirmations Number of confirmation
 * @property {String} data[].tx_id Transaction ID
 * @property {String} data[].tx_id_display Show transaction ID
 * @property {String} data[].coin_address Deposit transfer address
 * @property {String} data[].coin_address_display Show deposit transfer address
 * @property {String} data[].add_explorer Deposit transfer address
 * @property {String} data[].coin_type Coin name
 * @property {String} data[].smart_contract_name Smart contract name
 * @property {String} data[].transfer_method Trading method
 * @property {String} data[].status Status
 * @property {String} data[].status_display Display status
 * @property {String} data[].remark Remark
 * @property {String} data[].explorer Explorer URL of the transaction
 * @example
 * {
 *     "has_next": false,
 *     "curr_page": 1,
 *     "count": 1,
 *     "data": [
 *         {
 *             "coin_deposit_id": 14270229,
 *             "create_time": 1637212022,
 *             "amount": "200",
 *             "amount_display": "200",
 *             "diff_amount": "0",
 *             "min_amount": "0",
 *             "actual_amount": "200 ",
 *             "actual_amount_display": "200",
 *             "confirmations": 0,
 *             "tx_id": "",
 *             "tx_id_display": "XXXXXXXXXX",
 *             "coin_address": "XXXXXXXXXX",
 *             "coin_address_display": " XXXXXXXXXX",
 *             "add_explorer": "",
 *             "coin_type": "USDT",
 *             "smart_contract_name": null,
 *             "transfer_method": "local",
 *             "status": "finish",
 *             "status_display": "finish",
 *             "remark": "",
 *             "explorer": ""
 *         }
 *     ],
 *     "total": 1,
 *     "total_page": 1
 * }
 */
// acquireDepositRecord

/** Coinex User Operation History Result
 * @typedef {Object} UserOperationHistoryResult
 * @property {Number} time
 * @property {Number} account
 * @property {String} business
 * @property {Number} business_id
 * @property {String} asset
 * @property {String} change
 * @property {String} balance
 * @example
 * {
 *     "data": [
 *         {
 *             "time": 1636602204,
 *             "account": 0,
 *             "business": "trade",
 *             "business_id": 35437896,
 *             "asset": "BTC",
 *             "change": "0.12995834",
 *             "balance": "8748.45520473"
 *         },
 *         {
 *             "time": 1636451914,
 *             "account": 0,
 *             "business ": "trade",
 *             "business_id": 35437896,
 *             "asset": "USDT",
 *             "change": "-6.70000000",
 *             "balance": "42608970.78871773"
 *         }
 *     ],
 *     "curr_page": 1,
 *     "has_next": true,
 *     "count": 10
 * }
 */
// inquireUserOperationHistory

/** Coinex Trading Fee Rate Result
 * @typedef {Object} TradingFeeRateResult
 * @property {String} taker
 * @property {String} maker
 * @example
 * {
 *     "taker": "0.0018",
 *     "maker": "0.0018"
 * }
 */
// acquireTradingFeeRate

/** Coinex Withdrawal Request Result
 * @typedef {Object} WithdrawalRequestResult
 * @property {String} actual_amount
 * @property {String} amount
 * @property {String} coin_address
 * @property {String} coin_type
 * @property {Number} coin_withdraw_id
 * @property {Number} confirmations
 * @property {Number} create_time
 * @property {String} status
 * @property {String} tx_fee
 * @property {String} tx_id
 * @example
 * {
 *     "actual_amount": "1.00000000",
 *     "amount": "1.00000000",
 *     "coin_address": "1KAv3pazbTk2JnQ5xTo6fpKK7p1it2RzD4",
 *     "coin_type": "BCH",
 *     "coin_withdraw_id": 206,
 *     "confirmations": 0,
 *     "create_time": 1524228297,
 *     "status": "audit",
 *     "tx_fee": "0",
 *     "tx_id": ""
 * }
 */
// submitWithdrawalRequest

/** Coinex Margin Loan Result
 * @typedef {Object} MarginLoanResult
 * @property {Number} loan_id
 * @example
 * {
 *     loan_id: 1
 * }
 */
// marginLoan

/** Coinex Deposit Address Result
 * @typedef {Object} DepositAddressResult
 * @property {Number} coin_address
 * @property {Boolean} is_bitcoin_cash
 * @example
 * {
 *     "coin_address": "0x40aa234bcdc528ce411a6020da1a3c07124039d4",
 *     "is_bitcoin_cash": false
 * }
 */
// updateDepositAddress
// inquireDepositAddress


/** Coinex Transfer Record Between Spot Financial Account Result
 * @typedef {Object} TransferRecordBetweenSpotFinancialAccountResult
 * @property {Object[]} records Records
 * @property {Number} records[].id Transfer ID
 * @property {Number} records[].created_at Creation time
 * @property {Number} records[].updated_at Update time
 * @property {Number} records[].success_at Transfer completion time
 * @property {Number} records[].report_date
 * @property {Number} records[].user_id
 * @property {Number} records[].investment_account_id
 * @property {String} records[].asset Operated assets
 * @property {String} records[].amount Amount
 * @property {"IN"|"OUT"|"INTEREST"} records[].opt_type Operation Type ( IN: from Spot to Financial Account, OUT: from Financial to Spot Account, INTEREST: Interest )
 * @property {String} records[].day_rate Daily rate of return
 * @property {String} records[].status Status
 * @property {Number} total Total Records
 * @example
 * {
 *     "records": [
 *         {
 *             "id": 5063,
 *             "created_at": 1636330200,
 *             "updated_at": 1636330200,
 *             "success_at": 1636330200,
 *             "report_date": 1636329600,
 *             "user_id": 305,
 *             "investment_account_id": 2,
 *             "asset": "BTC",
 *             "amount": "0.00001052",
 *             "opt_type": "INTEREST",
 *             " day_rate": "0",
 *             "status": "SUCCESS"
 *         }
 *     ],
 *     "total": 495
 * }
 */
// transferRecordBetweenSpotFinancialAccount

/** Coinex Transfer Record Between Main And Sub Account Result
 * @typedef {Object} TransferRecordBetweenMainAndSubAccountResult
 * @property {Number} curr_page Current Page
 * @property {Boolean} has_next Does have next page?
 * @property {Number} per_page Records per page
 * @property {Number} total_page Total pages
 * @property {Number} count Total Count
 * @property {Object[]} data Records
 * @property {Number} data.time Transfer time
 * @property {String} data.transfer_from Transfer sender
 * @property {String} data.transfer_to Transfer receiver (Show either transfer sender or receiver by default)
 * @property {String} data.coin_type Coin name
 * @property {String} data.amount Transfer amount
 * @property {String} data.status Transfer status
 * @property {Number} total Total Records
 * @example
 * {
 *     "curr_page": 1,
 *     "has_next": false,
 *     "per_page": 10,
 *     "total_page": 1,
 *     "count": 4,
 *     "data": [
 *         {
 *             "time": 1636443179,
 *             "transfer_from": "sun",
 *             "transfer_to": "",
 *             "coin_type": "BTC",
 *             "amount": "1",
 *             "status": "success"
 *         }
 *     ],
 *     "total": 4
 * }
 */
// acquireTransferRecordBetweenMainAndSubAccount

/** Coinex Loan Record Result
 * @typedef {Object} LoanRecordResult
 * @property {Number} loan_id Loan record ID
 * @property {Number} create_time Creation timestamp
 * @property {String} market_type Market name
 * @property {String} coin_type Coin name
 * @property {String} day_rate Daily interest rate
 * @property {String} loan_amount Borrowed amount
 * @property {String} unflat_amount Amount and interest to be repaid
 * @property {Number} expire_time Time of expiration
 * @property {Boolean} is_renew Whether to renew automatically (false: Off; true: On)
 * @property {"Pass"|"Burst"|"Arrears"|"Finish"} status ("Pass": In loan, "Burst": Liquidated, "Arrears": In debt, "Finish": Repaid )
 * @example
 * {
 *     "page": 1,
 *     "limit": 10,
 *     "total": 9,
 *     "data": [
 *         {
 *             "loan_id": 1666,
 *             "create_time": 1635736743,
 *             "market_type": "BTCUSDT",
 *             "coin_type": "BTC",
 *             "day_rate": "0.0008",
 *             "loan_amount": "99.99",
 *             "unflat_amount": "0 ",
 *             "expire_time": 1636600743,
 *             "is_renew": true,
 *             "status": "finish"
 *         },
 *         {
 *             "loan_id": 1665,
 *             "create_time": 1635736729,
 *             "market_type": "BTCUSDT ",
 *             "coin_type": "BTC",
 *             "day_rate": "0",
 *             "loan_amount": "0.01",
 *             "unflat_amount": "0",
 *             "expire_time": 1636600729,
 *             "is_renew": true,
 *             "status": "finish"
 *         }
 *     ]
 * }
 */
// acquireLoanRecordInMarginAccount

/** Coinex Transfer Record Between Spot Perpetual Account Result
 * @typedef {Object} TransferRecordBetweenSpotPerpetualAccountResult
 * @property {Object[]} records Records
 * @property {Number} records[].amount Amount
 * @property {Number} records[].asset Operated assets
 * @property {Number} records[].create_at Creation time
 * @property {"transfer_in"|"transfer_out"} records[].transfer_type Operation Type ( transfer_in: from Spot to Perpetual Account, OUT: from Perpetual to Spot Account )
 * @property {Number} total Total Records
 * @example
 * {
 *     "records": [
 *         {
 *             "amount": "12",
 *             "asset": "USDT",
 *             "transfer_type": "transfer_out",
 *             "created_at": 1637287786
 *         },
 *         {
 *             "amount": "1",
 *             "asset": "BTC",
 *             "transfer_type": "transfer_in",
 *             "created_at": 1637287666
 *         },
 *         {
 *             " amount": "10002",
 *             "asset": "USDT",
 *             "transfer_type": "transfer_in",
 *             "created_at": 1637287619
 *         }
 *     ],
 *     "total": 3
 * }
 */
// transferRecordBetweenSpotPerpetualAccount

/** Coinex Transfer Record Between Margin Spot Account Result
 * @typedef {Object} TransferRecordBetweenMarginSpotAccountResult
 * @property {Object[]} records Records
 * @property {Number} records[].id Record ID
 * @property {Number} records[].updated_at Update time
 * @property {Number} records[].user_id User ID
 * @property {Number} records[].from_account_id Spot account ID: 0, Margin account ID: See [Acquire Market Info in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account006_margin_account}
 * @property {Number} records[].to_account_id Spot account ID: 0, Margin account ID: See [Acquire Market Info in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account006_margin_account}
 * @property {String} records[].asset Asset
 * @property {String} records[].amount Transfer amount
 * @property {String} records[].balance Account Balance
 * @property {"IN"|"OUT"} records[].transfer_type Transfer Type ( IN: from Spot to Margin Account, OUT: from Margin to Spot Account )
 * @property {String} records[].status Operation status
 * @property {Number} records[].created_at Creation time
 * @property {Number} total Total Records
 * @example
 * {
 *     "records": [
 *         {
 *             "id": 2612,
 *             "updated_at": 1635846838,
 *             "user_id": 1527,
 *             "from_account_id": 0,
 *             "to_account_id": 2,
 *             "asset": "BTC",
 *             "amount": "1",
 *             "balance": "2",
 *             "transfer_type": "IN",
 *             "status": "SUCCESS ",
 *             "created_at": 1635846838
 *         }
 *     ],
 *     "total": 6
 * }
 */
// transferRecordBetweenMarginSpotAccount

/** Coinex Withdrawal History Result
 * @typedef {Object} WithdrawalHistoryResult
 * @property {Number} coin_withdraw_id Withdrawal record ID
 * @property {Number} create_time Creation timestamp
 * @property {String} amount Withdrawal amount
 * @property {String} actual_amount Actual withdrawal amount
 * @property {String} tx_id Transaction ID
 * @property {String} coin_address To address
 * @property {String} tx_fee Withdrawal fee
 * @property {Number} confirmations Number of confirmation
 * @property {"audit"|"pass"|"processing"|"confirming"|"not_pass"|"cancel"|"finish"|"fail"} coin_type Coin name (audit, pass, processing, confirming, not_pass, cancel, finish, fail)
 * @property {String} status Operation status
 * @example
 * {
 *     "actual_amount": "1.00000000",
 *     "amount": "1.00000000",
 *     "coin_address": "1KAv3pazbTk2JnQ5xTo6fpKK7p1it2RzD4",
 *     "coin_type": "BCH ",
 *     "coin_withdraw_id": 206,
 *     "confirmations": 0,
 *     "create_time": 1524228297,
 *     "status": "audit",
 *     "tx_fee": "0",
 *     "tx_id": ""
 * }
 */
// acquireWithdrawalHistory

/** Coinex SubAccount APIKEY Result
 * @typedef {Object} SubAccountAPIKEYResult
 * @property {Number} user_auth_id Unique ID for APIKEY
 * @property {Number} create_time Creation time
 * @property {String} remark API Remark
 * @property {String} access_id access_id
 * @property {Array<String>} allowed_ips Bound IP Address
 * @property {Boolean} allow_withdraw Whether to allow withdrawal
 * @property {Boolean} allow_trade Whether to allow transaction
 * @property {Boolean} is_expires Whether the APIKEY has expired (if an IP address is bound, it will never expire by default; If no IP address is bound, the APIKEY will be valid for 3 months)
 * @property {Number} expired_time Expiration time (0: Permanently valid)
 * @property {String} secret_key API Secret Key
 * @example
 * {
 *     "user_auth_id": 554,
 *     "create_time": 1642145331,
 *     "remark": "2233",
 *     "access_id": "xxxxxxx",
 *     "allowed_ips" : [
 *         "1.1.1.1"
 *     ],
 *     "allow_withdraw": false,
 *     "allow_trade": true,
 *     "is_expires": false,
 *     "expired_time": 0,
 *     "secret_key": "xxxxxx"
 * }
 */
// createSubAccountAPIKEY
// acquireSubAccountAPIKEYDetail
// editSubAccountAPIKEY

/** Coinex SubAccount APIKEY Results
 * @typedef {Object} SubAccountAPIKEYResults
 * @property {Number} curr_page Current Page
 * @property {Boolean} has_next Does have next page?
 * @property {Number} count Total Count
 * @property {Number} total Total records
 * @property {Number} total_page Total pages
 * @property {Object[]} data Records
 * @property {Number} data[].user_auth_id Unique ID for APIKEY
 * @property {Number} data[].create_time Creation time
 * @property {String} data[].remark API Remark
 * @property {String} data[].access_id access_id
 * @property {Array<String>} data[].allowed_ips Bound IP Address
 * @property {Boolean} data[].allow_withdraw Whether to allow withdrawal
 * @property {Boolean} data[].allow_trade Whether to allow transaction
 * @property {Boolean} data[].is_expires Whether the APIKEY has expired (if an IP address is bound, it will never expire by default; If no IP address is bound, the APIKEY will be valid for 3 months)
 * @property {Number} data[].expired_time Expiration time (0: Permanently valid)
 * @example
 * {
 *     "has_next": false,
 *     "curr_page": 1,
 *     "count": 7,
 *     "data": [
 *         {
 *             "user_auth_id": 554,
 *             "create_time": 1642145331,
 *             "remark": "2233",
 *             "access_id": "5EDFCD524C7046B6AD9D10A2510A5BC9",
 *             "allowed_ips": [
 *                 "1.1.1.1"
 *             ],
 *             "allow_withdraw": false,
 *             "allow_trade" ": true,
 *             "is_expires": false,
 *             "expired_time": 0
 *         }
 *     ],
 *     "total": 7,
 *     "total_page": 1
 * }
 */
// acquireSubAccountAPIKEYList

//TODO: Review, specially examples