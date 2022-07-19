/**
 * @fileOverview Account API Endpoints
 * @module Account
 * @requires axios
 */

const axios = require("axios").default;
const { METHOD_TYPE } = require("@constants/index");

/**
 * Acquire Account Balance Info
 * @async
 * @function acquireAccountBalanceInfo
 * @param {String} access_id Access ID
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<AccountBalanceInfoResults>} Promise object represents the result of the request
 */
module.exports.acquireAccountBalanceInfo = function (access_id, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/balance/info",
		params: {
			access_id,
			tonce,
		},
	});
};

/**
 * Acquire Balance In Sub Account
 * @async
 * @function acquireBalanceInSubAccount
 * @param {String} access_id Access ID
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @param {String} [sub_user_name] Sub-account name
 * @param {String} [coin_type] Coin name
 * @returns {Promise<SubAccountBalanceInfoResults>} Promise object represents the result of the request
 */
module.exports.acquireBalanceInSubAccount = function (access_id, tonce = Date.now(), sub_user_name, coin_type) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/sub_account/balance",
		params: {
			access_id,
			tonce,
			sub_user_name,
			coin_type,
		},
	});
};

/**
 * Acquire Balance in AMM Account
 * @async
 * @function acquireBalanceInAMMAccount
 * @param {String} access_id Access ID
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireBalanceInAMMAccount = function (access_id, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/account/amm/balance",
		params: {
			access_id,
			tonce,
		},
	});
};

/**
 * Acquire Balance in Financial Account
 * @async
 * @function acquireBalanceInFinancialAccount
 * @param {String} access_id Access ID
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireBalanceInFinancialAccount = function (access_id, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/account/investment/balance",
		params: {
			access_id,
			tonce,
		},
	});
};

/**
 * Acquire Credit Info in Account
 * @async
 * @function acquireCreditInfoInAccount
 * @param {String} access_id Access ID
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireCreditInfoInAccount = function (access_id, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/credit/info",
		params: {
			access_id,
			tonce,
		},
	});
};

/**
 * Acquire Market Info in Margin Account
 * @async
 * @function acquireMarketInfoInMarginAccount
 * @param {String} access_id Access ID
 * @param {String} market Market
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireMarketInfoInMarginAccount = function (access_id, market, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/margin/account",
		params: {
			access_id,
			market,
			tonce,
		},
	});
};

/**
 * Inquire Margin Account Settings
 * @async
 * @function inquireMarginAccountSettings
 * @param {String} access_id Access ID
 * @param {String} market Market
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.inquireMarginAccountSettings = function (access_id, market, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/margin/config",
		params: {
			access_id,
			market,
			tonce,
		},
	});
};

/**
 * Acquire Balance in Credit Account
 * @async
 * @function acquireBalanceInCreditAccount
 * @param {String} access_id Access ID
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireBalanceInCreditAccount = function (access_id, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/credit/balance",
		params: {
			access_id,
			tonce,
		},
	});
};

/**
 * [Acquire Deposit Record]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account009_deposit_list}
 * @async
 * @function acquireDepositRecord
 * @param {String} access_id Access ID
 * @param {"processing"|"confirming"|"cancel"|"finish"|"too_small"|"to_hot"} [Status] State
 * @param {Number} [page=1]	Page number, starting from 1
 * @param {Number} [limit=10] Number of items per page, Max. 100
 * @param {String} [coin_type] Coin name
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireDepositRecord = function (access_id, page = 1, Limit = 10, State, coin_type, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/balance/coin/deposit",
		params: {
			access_id,
			page,
			Limit,
			State,
			coin_type,
			tonce,
		},
	});
};

/**
 * [Inquire User Operation History]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account010_balance_history}
 * @async
 * @function inquireUserOperationHistory
 * @param {String} access_id Access ID
 * @param {Number} [page=1]	Page number, starting from 1
 * @param {Number} [limit=10] Number of items per page, Max. 100
 * @param {String} [asset] Assets
 * @param {Number} [start_time] Query start time
 * @param {Number} [end_time] Query end time
 * @param {"trade"|"withdraw"|"deposit"|"maker_cash_back"} [business] Operation type ( trade: transaction, withdraw: withdrawal, deposit: deposit, maker_cash_back: spot maker rebate )
 * @param {Number} [account_id] Spot account ID: 0, Margin account ID: See [Acquire Market Info in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account006_margin_account}
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.inquireUserOperationHistory = function (
	access_id,
	page = 1,
	Limit = 10,
	start_time,
	end_time,
	asset,
	account_id,
	business,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/account/balance/history",
		params: {
			access_id,
			page,
			Limit,
			start_time,
			end_time,
			asset,
			account_id,
			business,
			tonce,
		},
	});
};

/**
 * [Acquire Trading Fee Rate]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account011_market_fee}
 * @async
 * @function acquireTradingFeeRate
 * @param {String} access_id Access ID
 * @param {String} market Market
 * @param {"SPOT"|"PERPETUAL"} [business_type="SPOT"] Transaction Type SPOT: Spot (default) PERPETUAL: Contract
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireTradingFeeRate = function (access_id, market, business_type = "SPOT", tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/account/market/fee",
		params: {
			access_id,
			market,
			business_type,
			tonce,
		},
	});
};

/**
 * [Spot Asset Transfer Between Main and Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account012_subaccount_transfer}
 * @async
 * @function spotAssetTransferBetweenMainAndSubAccount
 * @param {String} access_id Access ID
 * @param {String} coin_type Coin name
 * @param {String} amount Transfer amount
 * @param {"in"|"out"} [transfer_side="in"] “in” means transfer in, “out” means transfer out
 * @param {String} [transfer_account] Sub-account name
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.spotAssetTransferBetweenMainAndSubAccount = function (
	access_id,
	coin_type,
	amount,
	transfer_side = "in",
	transfer_account,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/sub_account/transfer",
		params: {
			access_id,
			coin_type,
			amount,
			transfer_side,
			transfer_account,
			tonce,
		},
	});
};

/**
 * [Asset Transfer Between Spot - Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account013_margin_transfer}
 * @async
 * @function assetTransferBetweenSpotMarginAccount
 * @param {String} access_id Access ID
 * @param {Number} from_account Spot account ID: 0, Margin account ID: See [Acquire Market Info in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account006_margin_account}
 * @param {Number} to_account Spot account ID: 0, Margin account ID: See [Acquire Market Info in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account006_margin_account}
 * @param {String} coin_type Coin name
 * @param {String} amount Transfer amount
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.assetTransferBetweenSpotMarginAccount = function (
	access_id,
	from_account,
	to_account,
	coin_type,
	amount,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/margin/transfer",
		params: {
			access_id,
			from_account,
			to_account,
			coin_type,
			amount,
			tonce,
		},
	});
};

/**
 * [Asset Transfer Between Spot - Perpetual Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account014_balance_contract_transfer}
 * @async
 * @function assetTransferBetweenSpotPerpetualAccount
 * @param {String} access_id Access ID
 * @param {String} coin_type Coin name
 * @param {"directionin"|"Accountout"} transfer_side Operation directionin: from Spot to Perpetual, Accountout: from Perpetual to Spot Account
 * @param {String} amount Number of transfers
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.assetTransferBetweenSpotPerpetualAccount = function (
	access_id,
	coin_type,
	transfer_side,
	amount,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/contract/balance/transfer",
		params: {
			access_id,
			coin_type,
			transfer_side,
			amount,
			tonce,
		},
	});
};

/**
 * [Submit Withdrawal Request]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account015_submit_withdraw}
 * @async
 * @function submitWithdrawalRequest
 * @param {String} access_id Access ID
 * @param {String} coin_type Coin name
 * @param {String} actual_amount The actual amount of withdrawal refers to the amount one actually receives after deducting the service fee. see [Fee Rates]{@link https://www.coinex.com/fees} for more info
 * @param {String} coin_address Authorized withdrawal address. For instance, if you are withdrawing XMR or XMC, you need to use “:” to combine “address” and “payment_id” into the form of “xxx:yyy”; When withdrawing XRP, you need to use “:” to combine “address” and “tag” “Combine into the form of “xxx:yyy”. You can fill in the mobile phone number or email address for Inter-user Transfer
 * @param {String} [smart_contract_name] Required by cryptocurrencies that support multiple withdrawal network, such as USDT is supported on ERC20, Omni, TRC20
 * @param {"onchain"|"local"} [transfer_method] onchain: Onchain transfer, local: Inter-user transfer
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.submitWithdrawalRequest = function (
	access_id,
	coin_type,
	actual_amount,
	coin_address,
	smart_contract_name,
	transfer_method,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/balance/coin/withdraw",
		params: {
			access_id,
			coin_type,
			actual_amount,
			coin_address,
			smart_contract_name,
			transfer_method,
			tonce,
		},
	});
};

/**
 * Cancel Withdrawal Request
 * @async
 * @function cancelWithdrawalRequest
 * @param {String} access_id Access ID
 * @param {String} coin_withdraw_id Withdrawal record ID
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.cancelWithdrawalRequest = function (access_id, coin_withdraw_id, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.DELETE,
		url: "/balance/coin/withdraw",
		params: {
			access_id,
			coin_withdraw_id,
			tonce,
		},
	});
};

/**
 * [Margin Loan]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account017_margin_loan}
 * @async
 * @function marginLoan
 * @param {String} access_id Access ID
 * @param {String} market Market name
 * @param {String} coin_type Coin name
 * @param {String} amount Loan amount
 * @param {0|1} [renew] Whether to renew automatically (0:No 1:Yes)
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.marginLoan = function (access_id, market, coin_type, amount, renew, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/margin/loan",
		params: {
			access_id,
			market,
			coin_type,
			amount,
			renew,
			tonce,
		},
	});
};

/**
 * [Margin Repayment]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account018_margin_flat}
 * @async
 * @function marginRepayment
 * @param {String} access_id access_id
 * @param {Number} tonce Millisecond timestamp, the acceptable error range from server time is ±60s
 * @param {String} market Market name
 * @param {String} coin_type Coin name
 * @param {String} amount Paid amount
 * @param {Number} [loan_id] The ID of loan record, which is blank when the remaining amount of loan in the current market is paid off.
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.marginRepayment = function (access_id, tonce, market, coin_type, amount, loan_id) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/margin/flat",
		params: {
			access_id,
			tonce,
			market,
			coin_type,
			amount,
			loan_id,
		},
	});
};

/**
 * [Update Deposit Address]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account019_update_deposit_address}
 * @async
 * @function updateDepositAddress
 * @param {String} access_id access_id
 * @param {Number} [smart_contract_name] If a certain coin support multiple networks, the protocol type must be specified.
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.updateDepositAddress = function (access_id, smart_contract_name, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.PUT,
		url: "/balance/deposit/address/<string:coin_type>",
		params: {
			access_id,
			smart_contract_name,
			tonce,
		},
	});
};

/**
 * [Inquire Deposit Address]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account020_query_deposit_address}
 * @async
 * @function inquireDepositAddress
 * @param {String} access_id access_id
 * @param {Number} [smart_contract_name] If a certain coin support multiple networks, the protocol type must be specified.
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.inquireDepositAddress = function (access_id, smart_contract_name, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/balance/deposit/address/<string:coin_type>",
		params: {
			access_id,
			smart_contract_name,
			tonce,
		},
	});
};

/**
 * [Transfer Record Between Spot - Financial Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account021_spot_invest_transfer_histoty}
 * @async
 * @function transferRecordBetweenSpotFinancialAccount
 * @param {String} [asset] Assets
 * @param {"IN"|"OUT"|"INTEREST"} [op_type] Operation ( IN: from Spot to Financial Account, OUT: from Financial to Spot Account, INTEREST: Interest )
 * @param {Number} [start_time] Query start time
 * @param {Number} [end_time] Query end time
 * @param {Number} [page=1] Number of pages
 * @param {Number} [limit=10] Number of items per page
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.transferRecordBetweenSpotFinancialAccount = function (
	asset,
	op_type,
	start_time,
	end_time,
	page = 1,
	limit = 10
) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/investment/transfer/history",
		params: {
			asset,
			op_type,
			start_time,
			end_time,
			page,
			limit,
		},
	});
};

/**
 * [Acquire Transfer Record Between Main and Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account022_sub_account_transfer_history}
 * @async
 * @function acquireTransferRecordBetweenMainAndSubAccount
 * @param {String} access_id access_id
 * @param {String} [sub_user_name] Sub-account name
 * @param {String} [coin_type] Coin name
 * @param {Number} [page=1] Number of pages
 * @param {Number} [limit=10] Number of items per page (Max. 500)
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireTransferRecordBetweenMainAndSubAccount = function (
	access_id,
	sub_user_name,
	coin_type,
	page = 1,
	limit = 10,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/sub_account/transfer/history",
		params: {
			access_id,
			sub_user_name,
			coin_type,
			page,
			limit,
			tonce,
		},
	});
};

/**
 * [Acquire Loan Record in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account023_margin_loan_history}
 * @async
 * @function acquireLoanRecordInMarginAccount
 * @param {String} access_id access_id
 * @param {String} [market] Market name
 * @param {String} [status] Status
 * @param {Number} [page=1] Page number, starting from 1
 * @param {Number} [limit=10] Number of entries per page, Max. 100
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireLoanRecordInMarginAccount = function (
	access_id,
	market,
	status,
	page = 1,
	limit = 10,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/margin/loan/history",
		params: {
			access_id,
			market,
			status,
			page,
			limit,
			tonce,
		},
	});
};

/**
 * [Transfer Record Between Spot - Perpetual Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account024_contract_transfer_history}
 * @async
 * @function transferRecordBetweenSpotPerpetualAccount
 * @param {String} [asset] Assets
 * @param {"transfer_in"|"transfer_out"} [transfer_type] Operation (transfer_in: from Spot to Perpetual Account, transfer_out: from Perpetual to Spot Account)
 * @param {Number} [start_time] Query start time
 * @param {Number} [end_time] Query end time
 * @param {Number} [page=1] Number of pages
 * @param {Number} [limit=10] Number of items per page
 * @param {String} access_id access_id
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.transferRecordBetweenSpotPerpetualAccount = function (
	asset,
	transfer_type,
	start_time,
	end_time,
	page = 1,
	limit = 10,
	access_id,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/contract/transfer/history",
		params: {
			asset,
			transfer_type,
			start_time,
			end_time,
			page,
			limit,
			access_id,
			tonce,
		},
	});
};

/**
 * [Transfer Record Between Margin - Spot Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account025_margin_transfer_history}
 * @async
 * @function transferRecordBetweenMarginSpotAccount
 * @param {String} access_id access_id
 * @param {String} [asset] Asset type
 * @param {String} [market] Market name
 * @param {String} [transfer_type] From/To
 * @param {Number} [page=1] Page number, starting from 1
 * @param {Number} [limit=10] Number of entries per page, Max. 1000
 * @param {Number} [start_time] Query start time
 * @param {Number} [end_time] Query end time
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.transferRecordBetweenMarginSpotAccount = function (
	access_id,
	asset,
	market,
	transfer_type,
	page = 1,
	limit = 10,
	start_time,
	end_time,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/margin/transfer/history",
		params: {
			access_id,
			asset,
			market,
			transfer_type,
			page,
			limit,
			start_time,
			end_time,
			tonce,
		},
	});
};

/**
 * [Acquire Withdrawal History]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account026_withdraw_list}
 * @async
 * @function acquireWithdrawalHistory
 * @param {String} access_id access_id
 * @param {String} [coin_type] Coin name
 * @param {Number} [coin_withdraw_id] Withdrawal record ID
 * @param {Number} [page=1] Page number, starting from 1
 * @param {Number} [limit=1] Number per page, Max. 100
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireWithdrawalHistory = function (
	access_id,
	coin_type,
	coin_withdraw_id,
	page = 1,
	limit = 10,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/balance/coin/withdraw",
		params: {
			access_id,
			coin_type,
			coin_withdraw_id,
			page,
			limit,
			tonce,
		},
	});
};

/**
 * [Create Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account027_create_sub_account}
 * @async
 * @function createSubAccount
 * @param {String} access_id access_id
 * @param {String} sub_user_name Username of sub-account
 * @param {String} password Containing at least 6 characters, including at least 1 upper case letter and 1 number
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.createSubAccount = function (access_id, sub_user_name, password, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/sub_account/register",
		params: {
			access_id,
			sub_user_name,
			password,
			tonce,
		},
	});
};

/**
 * [Unfreeze Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account028_unfronzen_sub_account}
 * @async
 * @function unfreezeSubAccount
 * @param {String} access_id access_id
 * @param {String} sub_user_name Username of sub-account
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.unfreezeSubAccount = function (access_id, sub_user_name, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/sub_account/unfrozen",
		params: {
			access_id,
			sub_user_name,
			tonce,
		},
	});
};

/**
 * [Freeze Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account029_fronzen_sub_account}
 * @async
 * @function freezeSubAccount
 * @param {String} access_id access_id
 * @param {String} sub_user_name Username of sub-account
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.freezeSubAccount = function (access_id, sub_user_name, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/sub_account/frozen",
		params: {
			access_id,
			sub_user_name,
			tonce,
		},
	});
};

/**
 * [Edit Account Settings]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account030_account_settings}
 * @async
 * @function editAccountSettings
 * @param {undefined} [cet_discount] Whether to activate CET deduction
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.editAccountSettings = function (cet_discount) {
	return axios({
		method: METHOD_TYPE.PUT,
		url: "/v1/account/settings",
		params: {
			cet_discount,
		},
	});
};

/**
 * [Create Sub-Account APIKEY]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account031_create_sub_account_api_key}
 * @async
 * @function createSubAccountAPIKEY
 * @param {String} access_id access_id
 * @param {String} allow_trade Whether there is transaction permission, true: yes; false: no
 * @param {String} allowed_ips Binding IP addresses (up to 50 can be bound)
 * @param {String} sub_user_name Sub-account username
 * @param {String} [remark] API Remark
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.createSubAccountAPIKEY = function (
	access_id,
	allow_trade,
	allowed_ips,
	sub_user_name,
	remark,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.POST,
		url: "/sub_account/auth/api",
		params: {
			access_id,
			allow_trade,
			allowed_ips,
			remark,
			sub_user_name,
			tonce,
		},
	});
};

/**
 * [Acquire Sub-Account APIKEY List]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account032_get_sub_account_api_key_list}
 * @async
 * @function acquireSubAccountAPIKEYList
 * @param {String} access_id access_id
 * @param {String} sub_user_name Sub-account username
 * @param {Number} [page=1] Number of pages
 * @param {Number} [limit=10] Number of items per page
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireSubAccountAPIKEYList = function (
	access_id,
	sub_user_name,
	page = 1,
	limit = 10,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.GET,
		url: "/sub_account/auth/api",
		params: {
			access_id,
			sub_user_name,
			page,
			limit,
			tonce,
		},
	});
};

/**
 * [Acquire Sub-Account APIKEY Detail]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account033_get_sub_account_api_key_detail}
 * @async
 * @function acquireSubAccountAPIKEYDetail
 * @param {String} access_id access_id
 * @param {Number} user_auth_id User Auth ID
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.acquireSubAccountAPIKEYDetail = function (access_id, user_auth_id, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.GET,
		url: `/sub_account/auth/api/${user_auth_id}`,
		params: {
			access_id,
			tonce,
		},
	});
};

/**
 * [Edit Sub-Account APIKEY]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account034_edit_sub_account_api_key}
 * @async
 * @function editSubAccountAPIKEY
 * @param {String} access_id access_id
 * @param {Number} user_auth_id User Auth ID
 * @param {String} allow_trade Whether there is transaction permission, true: yes; false: no
 * @param {String} allowed_ips Binding IP addresses (up to 50 can be bound)
 * @param {String} sub_user_name Sub-account username
 * @param {String} [remark] API Remark
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.editSubAccountAPIKEY = function (
	access_id,
	user_auth_id,
	allow_trade,
	allowed_ips,
	sub_user_name,
	remark,
	tonce = Date.now()
) {
	return axios({
		method: METHOD_TYPE.PUT,
		url: `/sub_account/auth/api/${user_auth_id}`,
		params: {
			access_id,
			allow_trade,
			allowed_ips,
			sub_user_name,
			remark,
			tonce,
		},
	});
};

/**
 * [Delete Sub-Account APIKEY]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account035_delete_sub_account_api_key}
 * @async
 * @function deleteSubAccountAPIKEY
 * @param {String} access_id access_id
 * @param {Number} user_auth_id User Auth ID
 * @param {Number} [tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<>} Promise object represents the result of the request
 */
module.exports.deleteSubAccountAPIKEY = function (access_id, user_auth_id, tonce = Date.now()) {
	return axios({
		method: METHOD_TYPE.DELETE,
		url: `/sub_account/auth/api/${user_auth_id}`,
		params: {
			access_id,
			tonce,
		},
	});
};
