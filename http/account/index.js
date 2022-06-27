/**
 * @fileOverview Account API Endpoints
 * @module Account
 * @requires axios
 */

const axios = require("axios").default;
const { METHOD_TYPE } = require("@constants/index");

module.exports.acquireAccountBalanceInfo = function(){
	return axios({
		url:"",
	})
}

module.exports.acquireBalanceInSubAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.acquireBalanceInAMMAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.acquireBalanceInFinancialAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.acquireCreditInfoInAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.acquireMarketInfoInMarginAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.inquireMarginAccountSettings = function(){
	return axios({
		url:"",
	})
}

module.exports.acquireBalanceInCreditAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.acquireDepositRecord = function(){
	return axios({
		url:"",
	})
}

module.exports.inquireUserOperationHistory = function(){
	return axios({
		url:"",
	})
}

module.exports.acquireTradingFeeRate = function(){
	return axios({
		url:"",
	})
}

module.exports.spotAssetTransferBetweenMainAndSubAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.assetTransferBetweenSpotMarginAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.assetTransferBetweenSpotPerpetualAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.submitWithdrawalRequest = function(){
	return axios({
		url:"",
	})
}

module.exports.cancelWithdrawalRequest = function(){
	return axios({
		url:"",
	})
}

module.exports.marginLoan = function(){
	return axios({
		url:"",
	})
}

module.exports.marginRepayment = function(){
	return axios({
		url:"",
	})
}

module.exports.updateDepositAddress = function(){
	return axios({
		url:"",
	})
}

module.exports.inquireDepositAddress = function(){
	return axios({
		url:"",
	})
}

module.exports.transferRecordBetweenSpotFinancialAccount = function(){
	return axios({
		url:"",
	})
}

module.exports.acquireTransferRecordBetweenMainAndSubAccount = function(){
	return axios({
		url:"/sub_account/transfer/history",
	})
}

module.exports.acquireLoanRecordInMarginAccount = function(){
	return axios({
		url:"/margin/loan/history",
	})
}

module.exports.transferRecordBetweenSpotPerpetualAccount = function(){
	return axios({
		url:"/contract/transfer/history",
	})
}

module.exports.transferRecordBetweenMarginSpotAccount = function(){
	return axios({
		url:"/margin/transfer/history",
	})
}

module.exports.acquireWithdrawalHistory = function(){
	return axios({
		url:"/balance/coin/withdraw",
	})
}

module.exports.createSubAccount = function(){
	return axios({
		method: METHOD_TYPE.POST,
		url:"/sub_account/register",
	})
}

module.exports.unfreezeSubAccount = function(){
	return axios({
		method: METHOD_TYPE.POST,
		url:"/sub_account/unfrozen",
	})
}

module.exports.freezeSubAccount = function(){
	return axios({
		method: METHOD_TYPE.POST,
		url: "/sub_account/frozen",
	})
}

module.exports.editAccountSettings = function(cet_discount){
	return axios({
		method: METHOD_TYPE.PUT,
		url: "/v1/account/settings",
	})
}

module.exports.createSubAccountAPIKEY = function(){
	return axios({
		method: METHOD_TYPE.POST,
		url: "/sub_account/auth/api",
	})
}

module.exports.acquireSubAccountAPIKEYList = function(){
	return axios({
		method: METHOD_TYPE.GET,
		url: "/sub_account/auth/api",
	})
}

module.exports.acquireSubAccountAPIKEYDetail = function(){
	return axios({
		method: METHOD_TYPE.GET,
		url: "/sub_account/auth/api/<int:user_auth_id>",
	})
}

module.exports.editSubAccountAPIKEY = function(){
	return axios({
		method: METHOD_TYPE.PUT,
		url: "/sub_account/auth/api/<int:user_auth_id>",
	})
}

module.exports.deleteSubAccountAPIKEY = function(){
	return axios({
		method: METHOD_TYPE.DELETE,
		url: "/sub_account/auth/api/<int:user_auth_id>",
	})
}