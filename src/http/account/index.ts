/**
 * @fileOverview Account API Endpoints
 * @module Account
 * @requires executeRequest
 */
const { BASE_URLS, METHOD_TYPE } = require("../../constants");
const { executeRequest } = require("../../libs");
const { signParams } = require("../../utils");

/**
 * Acquire Account Balance Info
 * @async
 * @function acquireAccountBalanceInfo
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<AccountBalanceInfoResults>} Promise object represents the result of the request
 */
export function acquireAccountBalanceInfo(
	{ access_id, tonce }: { access_id?: string; tonce: number } = { tonce: Date.now() }
): Promise<{
	[index: string]:{
		available: string,
		frozen: string
	}
}> {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/balance/info",
		params,
	});
}

/**
 * Acquire Balance In Sub Account
 * @async
 * @function acquireBalanceInSubAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.coin_type] Coin name
 * @param {String} [options.sub_user_name] Sub-account name
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<SubAccountBalanceInfoResults>} Promise object represents the result of the request
 */
export function acquireBalanceInSubAccount(
	{
		coin_type,
		sub_user_name,
		access_id,
		tonce,
	}: {
		coin_type?: string;
		sub_user_name?: string;
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		coin_type,
		sub_user_name,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/sub_account/balance",
		params,
	});
}

/**
 * Acquire Balance in AMM Account
 * @async
 * @function acquireBalanceInAMMAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Array<AMMAccountBalanceInfoResult>>} Promise object represents the result of the request
 */
export function acquireBalanceInAMMAccount(
	{
		access_id,
		tonce,
	}: {
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/account/amm/balance",
		params,
	});
}

/**
 * Acquire Balance in Financial Account
 * @async
 * @function acquireBalanceInFinancialAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Array<FinancialAccountBalanceInfoResult>>} Promise object represents the result of the request
 */
export function acquireBalanceInFinancialAccount(
	{
		access_id,
		tonce,
	}: {
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/account/investment/balance",
		params,
	});
}

/**
 * Acquire Credit Info in Account
 * @async
 * @function acquireCreditInfoInAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<CreditInfoResult>} Promise object represents the result of the request
 */
export function acquireCreditInfoInAccount(
	{
		access_id,
		tonce,
	}: {
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/credit/info",
		params,
	});
}

/**
 * Acquire Market Info in Margin Account
 * @async
 * @function acquireMarketInfoInMarginAccount
 * @param {String} market Market
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<MarginAccountCreditInfoResult>} Promise object represents the result of the request
 */
export function acquireMarketInfoInMarginAccount(
	market: string,
	{
		access_id,
		tonce,
	}: {
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/margin/account",
		params,
	});
}

/**
 * Inquire Margin Account Settings
 * @async
 * @function inquireMarginAccountSettings
 * @param {String} market Market
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<MarginAccountSettingsResult>} Promise object represents the result of the request
 */
export function inquireMarginAccountSettings(
	market: string,
	{ access_id, tonce }: { access_id?: string; tonce: number } = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/margin/config",
		params,
	});
}

/**
 * Acquire Balance in Credit Account
 * @async
 * @function acquireBalanceInCreditAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Array<BalanceInCreditAccountResult>>} Promise object represents the result of the request
 */
// @ts-ignore
export function acquireBalanceInCreditAccount(
	{ access_id, tonce }: { access_id?: string; tonce: number } = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/credit/balance",
		params,
	});
}

/**
 * [Acquire Deposit Record]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account009_deposit_list}
 * @async
 * @function acquireDepositRecord
 * @param {Object} options Optional Parameters
 * @param {String} [options.coin_type] Coin name
 * @param {"processing"|"confirming"|"cancel"|"finish"|"too_small"|"to_hot"} [options.status] State
 * @param {Number} [options.page=1]	Page number, starting from 1
 * @param {Number} [options.limit=10] Number of items per page, Max. 100
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Array<DepositRecordResult>>} Promise object represents the result of the request
 */
export function acquireDepositRecord(
	{
		coin_type,
		status,
		page,
		limit,
		access_id,
		tonce,
	}: {
		coin_type?: string;
		status?: "processing" | "confirming" | "cancel" | "finish" | "too_small" | "to_hot";
		page: number;
		limit: number;
		access_id?: string;
		tonce: number;
	} = {
		page: 1,
		limit: 10,
		tonce: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		coin_type,
		status,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/balance/coin/deposit",
		params,
	});
}

/**
 * [Inquire User Operation History]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account010_balance_history}
 * @async
 * @function inquireUserOperationHistory
 * @param {Object} options Optional Parameters
 * @param {String} [options.asset] Asset
 * @param {Number} [options.account_id] Spot account ID: 0, Margin account ID: See [Acquire Market Info in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account006_margin_account}
 * @param {"trade"|"withdraw"|"deposit"|"maker_cash_back"} [options.business] Operation type ( trade: transaction, withdraw: withdrawal, deposit: deposit, maker_cash_back: spot maker rebate )
 * @param {Number} [options.page=1]	Page number, starting from 1
 * @param {Number} [options.limit=10] Number of items per page, Max. 100
 * @param {Number} [options.start_time] Query start time
 * @param {Number} [options.end_time] Query end time
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Array<UserOperationHistoryResult>>} Promise object represents the result of the request
 */
export function inquireUserOperationHistory(
	{
		asset,
		account_id,
		business,
		page,
		limit,
		start_time,
		end_time,
		access_id,
		tonce,
	}: {
		asset?: string;
		account_id?: number;
		business?: "trade" | "withdraw" | "deposit" | "maker_cash_back";
		page: number;
		limit: number;
		start_time?: number;
		end_time?: number;
		access_id?: string;
		tonce: number;
	} = {
		page: 1,
		limit: 10,
		tonce: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		asset,
		account_id,
		business,
		page,
		limit,
		start_time,
		end_time,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/account/balance/history",
		params,
	});
}

/**
 * [Acquire Trading Fee Rate]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account011_market_fee}
 * @async
 * @function acquireTradingFeeRate
 * @param {String} market Market
 * @param {Object} options Optional Parameters
 * @param {"SPOT"|"PERPETUAL"} [options.business_type="SPOT"] Transaction Type SPOT: Spot (default) PERPETUAL: Contract
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<TradingFeeRateResult>} Promise object represents the result of the request
 */
export function acquireTradingFeeRate(
	market: string,
	{ business_type, access_id, tonce }: { business_type: "SPOT" | "PERPETUAL"; access_id?: string; tonce: number } = {
		business_type: "SPOT",
		tonce: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		business_type,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/account/market/fee",
		params,
	});
}

/**
 * [Spot Asset Transfer Between Main and Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account012_subaccount_transfer}
 * @async
 * @function spotAssetTransferBetweenMainAndSubAccount
 * @param {String} coin_type Coin name
 * @param {String} amount Transfer amount
 * @param {Object} options Optional Parameters
 * @param {"in"|"out"} [options.transfer_side="in"] Operation ("in": transfer in, "out": transfer out)
 * @param {String} [options.transfer_account] Sub-account name
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<{}>} Promise object represents the result of the request
 */
export function spotAssetTransferBetweenMainAndSubAccount(
	coin_type?: string,
	amount?: string,
	{
		transfer_side,
		transfer_account,
		access_id,
		tonce,
	}: { transfer_side: "in" | "out"; transfer_account?: string; access_id?: string; tonce: number } = {
		transfer_side: "in",
		tonce: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		coin_type,
		amount,
		transfer_side,
		transfer_account,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/sub_account/transfer",
		params,
	});
}

/**
 * [Asset Transfer Between Spot - Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account013_margin_transfer}
 * @async
 * @function assetTransferBetweenSpotMarginAccount
 * @param {String} amount Transfer amount
 * @param {String} coin_type Coin name
 * @param {Number} from_account Spot account ID: 0, Margin account ID: See [Acquire Market Info in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account006_margin_account}
 * @param {Number} to_account Spot account ID: 0, Margin account ID: See [Acquire Market Info in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account006_margin_account}
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<null>} Promise object represents the result of the request
 */
export function assetTransferBetweenSpotMarginAccount(
	amount: string,
	coin_type: string,
	from_account: number,
	to_account: number,
	{ access_id, tonce }: { access_id?: string; tonce: number } = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		amount,
		coin_type,
		from_account,
		to_account,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/margin/transfer",
		params,
	});
}

/**
 * [Asset Transfer Between Spot - Perpetual Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account014_balance_contract_transfer}
 * @async
 * @function assetTransferBetweenSpotPerpetualAccount
 * @param {String} amount Number of transfers
 * @param {String} coin_type Coin name
 * @param {"directionin"|"Accountout"} transfer_side Operation (directionin: from Spot to Perpetual, Accountout: from Perpetual to Spot Account)
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<null>} Promise object represents the result of the request
 */
export function assetTransferBetweenSpotPerpetualAccount(
	amount: string,
	coin_type: string,
	transfer_side: "directionin" | "Accountout",
	{ access_id, tonce }: { access_id?: string; tonce: number } = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		amount,
		coin_type,
		transfer_side,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/contract/balance/transfer",
		params,
	});
}

/**
 * [Submit Withdrawal Request]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account015_submit_withdraw}
 * @async
 * @function submitWithdrawalRequest
 * @param {String} actual_amount The actual amount of withdrawal refers to the amount one actually receives after deducting the service fee. see [Fee Rates]{@link https://www.coinex.com/fees} for more info
 * @param {String} coin_type Coin name
 * @param {String} coin_address Authorized withdrawal address. For instance, if you are withdrawing XMR or XMC, you need to use “:” to combine “address” and “payment_id” into the form of “xxx:yyy”; When withdrawing XRP, you need to use “:” to combine “address” and “tag” “Combine into the form of “xxx:yyy”. You can fill in the mobile phone number or email address for Inter-user Transfer
 * @param {Object} options Optional Parameters
 * @param {String} [options.smart_contract_name] Required by cryptocurrencies that support multiple withdrawal network, such as USDT is supported on ERC20, Omni, TRC20
 * @param {"onchain"|"local"} [options.transfer_method] onchain: Onchain transfer, local: Inter-user transfer
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<WithdrawalRequestResult>} Promise object represents the result of the request
 */
export function submitWithdrawalRequest(
	actual_amount: string,
	coin_type: string,
	coin_address: string,
	{
		smart_contract_name,
		transfer_method,
		access_id,
		tonce,
	}: {
		smart_contract_name?: string;
		transfer_method?: "onchain" | "local";
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		actual_amount,
		coin_type,
		coin_address,
		smart_contract_name,
		transfer_method,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/balance/coin/withdraw",
		params,
	});
}

/**
 * Cancel Withdrawal Request
 * @async
 * @function cancelWithdrawalRequest
 * @param {String} coin_withdraw_id Withdrawal record ID
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<{}>} Promise object represents the result of the request
 */
export function cancelWithdrawalRequest(
	coin_withdraw_id: string,
	{ access_id, tonce }: { access_id?: string; tonce: number } = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		coin_withdraw_id,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.DELETE,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/balance/coin/withdraw",
		params,
	});
}

/**
 * [Margin Loan]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account017_margin_loan}
 * @async
 * @function marginLoan
 * @param {String} amount Loan amount
 * @param {String} coin_type Coin name
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {0|1} [options.renew] Whether to renew automatically (0:No, 1:Yes)
 * @param {String} [options.access_id] Access ID
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<MarginLoanResult>} Promise object represents the result of the request
 */
export function marginLoan(
	amount: string,
	coin_type: string,
	market: string,
	{ renew, access_id, tonce }: { renew?: 0 | 1; access_id?: string; tonce: number } = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		amount,
		coin_type,
		market,
		renew,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/margin/loan",
		params,
	});
}

/**
 * [Margin Repayment]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account018_margin_flat}
 * @async
 * @function marginRepayment
 * @param {String} amount Paid amount
 * @param {String} coin_type Coin name
 * @param {String} market Market name
 * @param {Object} options Optional Parameters
 * @param {Number} [options.loan_id] The ID of loan record, which is blank when the remaining amount of loan in the current market is paid off.
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<null>} Promise object represents the result of the request
 */
export function marginRepayment(
	amount: string,
	coin_type: string,
	market: string,
	{ loan_id, access_id, tonce }: { loan_id?: number; access_id?: string; tonce: number } = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		amount,
		coin_type,
		market,
		loan_id,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/margin/flat",
		params,
	});
}

/**
 * [Update Deposit Address]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account019_update_deposit_address}
 * @async
 * @function updateDepositAddress
 * @param {Object} options Optional Parameters
 * @param {Number} [options.smart_contract_name] If a certain coin support multiple networks, the protocol type must be specified.
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<DepositAddressResult>} Promise object represents the result of the request
 */
export function updateDepositAddress(
	{ smart_contract_name, access_id, tonce }: { smart_contract_name?: number; access_id?: string; tonce: number } = {
		tonce: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		smart_contract_name,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.PUT,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/balance/deposit/address/<string:coin_type>",
		params,
	});
}

/**
 * [Inquire Deposit Address]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account020_query_deposit_address}
 * @async
 * @function inquireDepositAddress
 * @param {Object} options Optional Parameters
 * @param {Number} [options.smart_contract_name] If a certain coin support multiple networks, the protocol type must be specified.
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<DepositAddressResult>} Promise object represents the result of the request
 */
export function inquireDepositAddress(
	{ smart_contract_name, access_id, tonce }: { smart_contract_name?: number; access_id?: string; tonce: number } = {
		tonce: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		smart_contract_name,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/balance/deposit/address/<string:coin_type>",
		params,
	});
}

/**
 * [Transfer Record Between Spot - Financial Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account021_spot_invest_transfer_histoty}
 * @async
 * @function transferRecordBetweenSpotFinancialAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.asset] Assets
 * @param {"IN"|"OUT"|"INTEREST"} [options.op_type] Operation ( IN: from Spot to Financial Account, OUT: from Financial to Spot Account, INTEREST: Interest )
 * @param {Number} [options.start_time] Query start time
 * @param {Number} [options.end_time] Query end time
 * @param {Number} [options.page=1] Number of pages
 * @param {Number} [options.limit=10] Number of items per page
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<TransferRecordBetweenSpotFinancialAccountResult>} Promise object represents the result of the request
 */
export function transferRecordBetweenSpotFinancialAccount(
	{
		asset,
		op_type,
		start_time,
		end_time,
		page,
		limit,
		access_id,
		tonce,
	}: {
		asset?: string;
		op_type?: "IN" | "OUT" | "INTEREST";
		start_time?: number;
		end_time?: number;
		page: number;
		limit: number;
		access_id?: string;
		tonce: number;
	} = { page: 1, limit: 10, tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		asset,
		op_type,
		start_time,
		end_time,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/investment/transfer/history",
		params,
	});
}

/**
 * [Acquire Transfer Record Between Main and Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account022_sub_account_transfer_history}
 * @async
 * @function acquireTransferRecordBetweenMainAndSubAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.sub_user_name] Sub-account name
 * @param {String} [options.coin_type] Coin name
 * @param {Number} [options.page=1] Number of pages
 * @param {Number} [options.limit=10] Number of items per page (Max. 500)
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<TransferRecordBetweenMainAndSubAccountResult>} Promise object represents the result of the request
 */
export function acquireTransferRecordBetweenMainAndSubAccount(
	{
		sub_user_name,
		coin_type,
		page,
		limit,
		access_id,
		tonce,
	}: {
		sub_user_name?: string;
		coin_type?: string;
		page: number;
		limit: number;
		access_id?: string;
		tonce: number;
	} = { page: 1, limit: 10, tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		sub_user_name,
		coin_type,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/sub_account/transfer/history",
		params,
	});
}

/**
 * [Acquire Loan Record in Margin Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account023_margin_loan_history}
 * @async
 * @function acquireLoanRecordInMarginAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.market] Market name
 * @param {String} [options.status] Status
 * @param {Number} [options.page=1] Page number, starting from 1
 * @param {Number} [options.limit=10] Number of entries per page, Max. 100
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Array<LoanRecordResult>>} Promise object represents the result of the request
 */
export function acquireLoanRecordInMarginAccount(
	{
		market,
		status,
		page,
		limit,
		access_id,
		tonce,
	}: {
		market?: string;
		status?: string;
		page: number;
		limit: number;
		access_id?: string;
		tonce: number;
	} = { page: 1, limit: 10, tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		market,
		status,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/margin/loan/history",
		params,
	});
}

/**
 * [Transfer Record Between Spot - Perpetual Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account024_contract_transfer_history}
 * @async
 * @function transferRecordBetweenSpotPerpetualAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.asset] Assets
 * @param {"transfer_in"|"transfer_out"} [options.transfer_type] Operation (transfer_in: from Spot to Perpetual Account, transfer_out: from Perpetual to Spot Account)
 * @param {Number} [options.start_time] Query start time
 * @param {Number} [options.end_time] Query end time
 * @param {Number} [options.page=1] Number of pages
 * @param {Number} [options.limit=10] Number of items per page
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<TransferRecordBetweenSpotPerpetualAccountResult>} Promise object represents the result of the request
 */
export function transferRecordBetweenSpotPerpetualAccount(
	{
		asset,
		transfer_type,
		start_time,
		end_time,
		page,
		limit,
		access_id,
		tonce,
	}: {
		asset?: string;
		transfer_type?: "transfer_in" | "transfer_out";
		start_time?: number;
		end_time?: number;
		page: number;
		limit: number;
		access_id?: string;
		tonce: number;
	} = { page: 1, limit: 10, tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		asset,
		transfer_type,
		start_time,
		end_time,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/contract/transfer/history",
		params,
	});
}

/**
 * [Transfer Record Between Margin - Spot Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account025_margin_transfer_history}
 * @async
 * @function transferRecordBetweenMarginSpotAccount
 * @param {Object} options Optional Parameters
 * @param {String} [options.asset] Asset type
 * @param {String} [options.market] Market name
 * @param {String} [options.transfer_type] From/To
 * @param {Number} [options.start_time] Query start time
 * @param {Number} [options.end_time] Query end time
 * @param {Number} [options.page=1] Page number, starting from 1
 * @param {Number} [options.limit=10] Number of entries per page, Max. 1000
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<TransferRecordBetweenMarginSpotAccountResult>} Promise object represents the result of the request
 */
export function transferRecordBetweenMarginSpotAccount(
	{
		asset,
		market,
		transfer_type,
		start_time,
		end_time,
		page,
		limit,
		access_id,
		tonce,
	}: {
		asset?: string;
		market?: string;
		transfer_type?: number;
		start_time?: number;
		end_time?: number;
		page: number;
		limit: number;
		access_id?: string;
		tonce: number;
	} = { page: 1, limit: 10, tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		asset,
		market,
		transfer_type,
		start_time,
		end_time,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/margin/transfer/history",
		params,
	});
}

/**
 * [Acquire Withdrawal History]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account026_withdraw_list}
 * @async
 * @function acquireWithdrawalHistory
 * @param {Object} options Optional Parameters
 * @param {String} [options.coin_type] Coin name
 * @param {Number} [options.coin_withdraw_id] Withdrawal record ID
 * @param {Number} [options.page=1] Page number, starting from 1
 * @param {Number} [options.limit=1] Number per page, Max. 100
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<Array<WithdrawalHistoryResult>>} Promise object represents the result of the request
 */
export function acquireWithdrawalHistory(
	{
		coin_type,
		coin_withdraw_id,
		page,
		limit,
		access_id,
		tonce,
	}: {
		coin_type?: string;
		coin_withdraw_id?: number;
		page: number;
		limit: number;
		access_id?: string;
		tonce: number;
	} = { page: 1, limit: 10, tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		coin_type,
		coin_withdraw_id,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/balance/coin/withdraw",
		params,
	});
}

/**
 * [Create Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account027_create_sub_account}
 * @async
 * @function createSubAccount
 * @param {String} sub_user_name Username of sub-account
 * @param {String} password Containing at least 6 characters, including at least 1 upper case letter and 1 number
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<{}>} Promise object represents the result of the request
 */
export function createSubAccount(
	sub_user_name: string,
	password: string,
	{
		access_id,
		tonce,
	}: {
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		sub_user_name,
		password,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/sub_account/register",
		params,
	});
}

/**
 * [Unfreeze Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account028_unfronzen_sub_account}
 * @async
 * @function unfreezeSubAccount
 * @param {String} sub_user_name Username of sub-account
 * @param {Object} options Optional Parameters
 * @param {String} options.access_id access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<{}>} Promise object represents the result of the request
 */
// @ts-ignore
export function unfreezeSubAccount(
	sub_user_name: string,
	{
		access_id,
		tonce,
	}: {
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		sub_user_name,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/sub_account/unfrozen",
		params,
	});
}

/**
 * [Freeze Sub-Account]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account029_fronzen_sub_account}
 * @async
 * @function freezeSubAccount
 * @param {String} sub_user_name Username of sub-account
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<{}>} Promise object represents the result of the request
 */
export function freezeSubAccount(
	sub_user_name: string,
	{
		access_id,
		tonce,
	}: {
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		sub_user_name,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/sub_account/frozen",
		params,
	});
}

/**
 * [Edit Account Settings]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account030_account_settings}
 * @async
 * @function editAccountSettings
 * @param {Object} options Optional Parameters
 * @param {Boolean} [options.cet_discount] Whether to activate CET deduction
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<{}>} Promise object represents the result of the request
 */
export function editAccountSettings(
	{ cet_discount, access_id, tonce }: { cet_discount?: boolean; access_id?: string; tonce: number } = {
		tonce: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		cet_discount,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.PUT,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/v1/account/settings",
		params,
	});
}

/**
 * [Create Sub-Account APIKEY]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account031_create_sub_account_api_key}
 * @async
 * @function createSubAccountAPIKEY
 * @param {String} sub_user_name Sub-account username
 * @param {String} allow_trade Whether there is transaction permission, true: yes; false: no
 * @param {String} allowed_ips Binding IP addresses (up to 50 can be bound)
 * @param {Object} options Optional Parameters
 * @param {String} [options.remark] API Remark
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<SubAccountAPIKEYResult>} Promise object represents the result of the request
 */
export function createSubAccountAPIKEY(
	sub_user_name?: string,
	allow_trade?: string,
	allowed_ips?: string,
	{ remark, access_id, tonce }: { remark?: string; access_id?: string; tonce: number } = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		sub_user_name,
		remark,
		allow_trade,
		allowed_ips,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.POST,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/sub_account/auth/api",
		params,
	});
}

/**
 * [Acquire Sub-Account APIKEY List]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account032_get_sub_account_api_key_list}
 * @async
 * @function acquireSubAccountAPIKEYList
 * @param {String} sub_user_name Sub-account username
 * @param {Object} options Optional Parameters
 * @param {Number} [options.page=1] Number of pages
 * @param {Number} [options.limit=10] Number of items per page
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<SubAccountAPIKEYResults>} Promise object represents the result of the request
 */
export function acquireSubAccountAPIKEYList(
	sub_user_name: string,
	{ page, limit, access_id, tonce }: { page: number; limit: number; access_id?: string; tonce: number } = {
		page: 1,
		limit: 10,
		tonce: Date.now(),
	}
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		sub_user_name,
		page,
		limit,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: "/sub_account/auth/api",
		params,
	});
}

/**
 * [Acquire Sub-Account APIKEY Detail]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account033_get_sub_account_api_key_detail}
 * @async
 * @function acquireSubAccountAPIKEYDetail
 * @param {Number} user_auth_id User Auth ID
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<SubAccountAPIKEYResult>} Promise object represents the result of the request
 */
export function acquireSubAccountAPIKEYDetail(
	user_auth_id: number,
	{
		access_id,
		tonce,
	}: {
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.GET,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: `/sub_account/auth/api/${user_auth_id}`,
		params,
	});
}

/**
 * [Edit Sub-Account APIKEY]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account034_edit_sub_account_api_key}
 * @async
 * @function editSubAccountAPIKEY
 * @param {Number} user_auth_id User Auth ID
 * @param {Boolean} allow_trade Whether there is transaction permission, true: yes; false: no
 * @param {Array<String>} allowed_ips Binding IP addresses (up to 50 can be bound)
 * @param {String} sub_user_name Sub-account username
 * @param {Object} options Optional Parameters
 * @param {String} [options.remark] API Remark
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<SubAccountAPIKEYResult>} Promise object represents the result of the request
 */
export function editSubAccountAPIKEY(
	user_auth_id?: number,
	allow_trade?: boolean,
	allowed_ips?: string[],
	sub_user_name?: string,
	{ remark, access_id, tonce }: { remark?: string; access_id?: string; tonce: number } = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		allow_trade,
		allowed_ips,
		sub_user_name,
		remark,
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.PUT,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: `/sub_account/auth/api/${user_auth_id}`,
		params,
	});
}

/**
 * [Delete Sub-Account APIKEY]{@link https://viabtc.github.io/coinex_api_en_doc/spot/#docsspot002_account035_delete_sub_account_api_key}
 * @async
 * @function deleteSubAccountAPIKEY
 * @param {Number} user_auth_id User Auth ID
 * @param {Object} options Optional Parameters
 * @param {String} [options.access_id] access_id
 * @param {Number} [options.tonce=Date.now()] Millisecond timestamp, the acceptable error range from server time is ±60s
 * @returns {Promise<{}>} Promise object represents the result of the request
 */
export function deleteSubAccountAPIKEY(
	user_auth_id: number,
	{
		access_id,
		tonce,
	}: {
		access_id?: string;
		tonce: number;
	} = { tonce: Date.now() }
) {
	// @ts-ignore
	const { apiKey, apiSecret } = this;
	const params = {
		access_id: access_id ? access_id : apiKey,
		tonce,
	};

	return executeRequest({
		method: METHOD_TYPE.DELETE,
		headers: {
			authorization: signParams(apiSecret, params),
		},
		baseURL: BASE_URLS.GENERAL,
		url: `/sub_account/auth/api/${user_auth_id}`,
		params,
	});
}
