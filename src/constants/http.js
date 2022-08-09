/**
 * @namespace HTTPConstants
 */

module.exports.BASE_URLS = {
	GENERAL: "https://api.coinex.com/v1",
	FUTURES: "https://api.coinex.com/perpetual/v1",
};


/**
 * Enum for Http Method Types.
 * @readonly
 * @enum {String} METHOD_TYPE
 * @memberof HTTPConstants
 */
module.exports.METHOD_TYPE = {
	/** GET HTTP Request */
	GET: "get",
	/** POST HTTP Request */
	POST: "post",
	/** DELETE HTTP Request */
	DELETE: "delete",
	/** PUT HTTP Request */
	PUT: "PUT",
};

const {
	//Invalid Errors
	// InvalidError, Base
	InvalidArgumentError,
	InvalidLeverageError,
	InvalidPriceSizeError,
	InvalidCloseAmountError,

	//Service Errors
	// ServiceError, Base
	InternalServiceError,
	ServiceTimeoutError,
	ServiceUnavailableError,
	TradingServiceUnavailableError,

	//Does Not Exists Errors
	// DoesNotExitsError, Base
	UserDoesNotExistError,
	AssetDoesNotExitsError,
	OrderDoesNotExistError,
	MarketDoesNotExistError,
	PositionDoesNotExitsError,
	AccessIDDoesNotExistError,
} = require("@errors/index");

/**
 * Response Code Map.
 * @readonly
 * @enum {Object} RESPONSE_CODES
 * @memberof HTTPConstants
 */
module.exports.RESPONSE_CODES = {
	/** Succeeded */
	0: {
		message: "Succeeded",
		description: "Succeeded",
	},
	/** Error */
	1: {
		message: "Error",
		description: "Error",
	},
	/** Invalid argument */
	2: {
		message: "Invalid argument",
		description: "Invalid argument",
		error: InvalidArgumentError,
	},
	3: {
		message: "Internal error",
		description: "Internal error",
	},
	23: {
		message: "IP prohibited",
		description: "IP prohibited",
	},
	24: {
		message: "AccessID does not exist",
		description: "AccessID does not exist",
	},
	25: {
		message: "Signature error",
		description: "Signature error",
	},
	34: {
		message: "AccessID expired",
		description: "AccessID expired",
	},
	35: {
		message: "Service unavailable",
		description: "Service unavailable",
		error: ServiceUnavailableError,
	},
	36: {
		message: "Service timeout",
		description: "Service timeout",
		error: ServiceTimeoutError,
	},
	40: {
		message: "Main account and sub-account do not match",
		description: "Main account and sub-account do not match",
	},
	49: {
		message: "The transfer to the sub-account was rejected",
		description: "The transfer to the sub-account was rejected",
	},
	107: {
		message: "Insufficient balance",
		description: "Insufficient balance",
	},
	158: {
		message: "No permission to use this API",
		description: "No permission to use this API",
	},
	213: {
		message: "Requests submitted too frequently",
		description: "Requests submitted too frequently",
	}, //RequestTooFrequentlyOnAPIError
	227: {
		message: "The timestamp is wrong, the timestamp must be within ±60s of the server time",
		description: "The timestamp is wrong, the timestamp must be within ±60s of the server time",
	},
	600: {
		message: "Order number does not exist",
		description: "Order number does not exist",
	},
	601: {
		message: "Other users' orders",
		description: "Other users' orders",
	}, //?
	602: {
		message: "Below the minimum buying or selling limit",
		description: "Below the minimum buying or selling limit",
	},
	606: {
		message: "The order price deviates too much from the latest transaction price",
		description: "The order price deviates too much from the latest transaction price",
	},
	651: {
		message: "Merge depth error",
		description: "Merge depth error",
	},
	3007: {
		message: "Service is not available during funding fee settlement. Please try again later.",
		description: "Service is not available during funding fee settlement",
	}, //Same as Service Unavailable - should be inherited
	3008: {
		message: "Service busy, please try again later.",
		description: "Service busy, please try again later.",
	}, //Same as Service Unavailable - should be inherited
	3101: {
		message: "market not exists",
		description: "Market does not exist",
		error: MarketDoesNotExistError,
	},
	3102: {
		message: "user id not exists",
		description: "User does not exist",
		error: UserDoesNotExistError,
	},
	3103: {
		message: "order not exists",
		description: "Order does not exist",
		error: OrderDoesNotExistError,
	},
	3104: {
		message: "stop price equal to deal price",
		description: "The price of stop-loss, take-profit or stop order is equal to the transaction price",
	}, //TargetPriceIsEqualToDealPriceError
	3105: {
		message: "position not exists",
		description: "Position does not exist",
		error: PositionDoesNotExitsError,
	},
	3106: {
		message: "asset not exists",
		description: "Asset does not exist",
		error: AssetDoesNotExitsError,
	},
	3107: {
		message: "balance update repeate",
		description: "Repeated balance update",
	}, // UnavailableBalanceDueToRepeatingUpdateError
	3108: {
		message: "amount exceed limit",
		description: "The position amount exceeds the upper limit",
	},
	3109: {
		message: "balance not enough",
		description: "Balance Insufficient",
	}, // inherited from InsufficientBalanceError
	3110: {
		message: "trader not enough",
		description: "Insufficient counter-parties",
	},
	3111: {
		message: "exceed max limit",
		description: "limit value exceeds the maximum limit",
	},
	3112: {
		message: "user not match",
		description: "Users do not match",
	},
	3113: {
		message: "invalid leverage value",
		description: "Invalid leverage value",
		error: InvalidLeverageError,
	}, //inherited from InvalidArgumentError
	3115: {
		message: "position liquidating",
		description: "The position is being liquidated",
	},
	3116: {
		message: "can not complete deal, kill order",
		description: "Failed to fill the transaction, terminate the order",
	},
	3117: {
		message: "position will liquidation",
		description: "This operation will lead to forced liquidation",
	},
	3118: {
		message: "limit price lower than liquidation price",
		description: "Limit price lower than forced liquidation price",
	},
	3119: {
		message: "limit price higher than liquidation price",
		description: "Limit price higher than forced liquidation price",
	},
	3120: {
		message: "no position",
		description: "Position does not exist",
	},
	3121: {
		message: "cross position",
		description: "The Margin cannot be changed in Cross Margin",
	},
	3122: {
		message: "order exist",
		description: "Order already exists",
	},
	3123: {
		message: "margin less init margin",
		description: "The margin cannot be less than the initial margin",
	},
	3124: {
		message: "sub too much margin",
		description: "Too much margin withdrawn",
	},
	3125: {
		message: "stop price equal to index price",
		description: "The price of stop-loss, take-profit or stop order is equal to the index price",
	},
	3126: {
		message: "stop price equal to sign price",
		description: "The price of stop-loss, take-profit or stop order is equal to the mark price",
	},
	3127: {
		message: "amount too small",
		description: "Amount too small",
	},
	3128: {
		message: "invalid price size",
		description: "Invalid price size",
		error: InvalidPriceSizeError,
	},
	3129: {
		message: "not only maker, kill order",
		description: "Maker only unavailable, terminate the order",
	},
	3130: {
		message: "trading is unavailable in this market",
		description: "Trading service is currently prohibited in this market",
		error: TradingServiceUnavailableError,
	},
	3131: {
		message: "Stop order amount limit exceeded 100 orders at most for one market",
		description: "The number of stop orders in a single market cannot exceed 100",
	},
	3132: {
		message: "position is closing",
		description:
			"The user's other closing strategies are being implemented, e.g. closing all positions and TP/SL settings",
	},
	3133: {
		message: "Stop-Loss price cannot be lower than the forced liquidation price",
		description: "Stop-Loss price for long positions cannot be lower than the forced liquidation price",
	},
	3134: {
		message: "Stop-Loss price cannot be higher than the current price",
		description: "Stop-Loss price for short positions cannot be higher than the current price",
	},
	3135: {
		message: "Take-Profit price cannot be lower than the current price",
		description: "Take-Profit price for long positions cannot be lower than the current price",
	},
	3136: {
		message: "invalid close amount",
		description: "Invalid closing amount",
		error: InvalidCloseAmountError,
	},
	3137: {
		message: "Take-Profit price cannot be higher than the current price",
		description: "Take-Profit price for short positions cannot be higher than the current price",
	},
	3138: {
		message: "Stop-Loss price cannot be higher than the forced liquidation price",
		description: "Stop-Loss price for short positions cannot be higher than forced liquidation price",
	},
	3139: {
		message: "Stop-Loss price cannot be lower than the current price",
		description: "Stop-Loss price for long positions cannot be lower than the current price",
	},
	4001: {
		message: "service unavailable",
		description: "Service unavailable",
		error: ServiceUnavailableError,
	},
	4002: {
		message: "service timeout",
		description: "Service timeout",
		error: ServiceTimeoutError,
	},
	4003: {
		message: "internal error",
		description: "Contract internal error",
		error: InternalServiceError,
	},
	4004: {
		message: "invalid argument",
		description: "Contract invalid argument",
		error: InvalidArgumentError,
	},
	4005: {
		message: "access_id not exists",
		description: "AccessId does not exist",
		error: AccessIDDoesNotExistError,
	},
	4006: {
		message: "authorization fail",
		description: "Authorization failed",
	},
	4007: {
		message: "ip not allow visit",
		description: "IP access prohibited",
	},
	4008: {
		message: "need authorization header",
		description: "HTTP header requires authorization info",
	},
	4009: {
		message: "unknown method",
		description: "Invalid method",
	},
	4010: {
		message: "time check error",
		description: "Time check error",
	}, //same as TimestampMismatchError
	4011: {
		message: "user is forbidden",
		description: "User prohibited",
	},
	4012: {
		message:
			"The deviation between your estimated execution price and the index price is greater than 10%, you can reduce your delegation amount appropriately and try again.",
		description:
			"The deviation between your estimated execution price and the target price is greater than 10%, please adjust the price appropriately and try again",
	},
	4013: {
		message:
			"The deviation between your delegated price and the index price is greater than x%, you can appropriately adjust your delegation price and try again",
		description:
			"The deviation between your order price and the index price is greater than x%, please adjust your order price appropriately and try again.\nNote: 5% for BTCUSD, BTCUSDT, ETHUSD, ETHUSDT markets, while 10% for other contract markets",
	},
	4014: {
		message:
			"The deviation between your delegated price and the trigger price is greater than x%, you can appropriately adjust your delegated price and try again",
		description:
			"The deviation between your order price and the stop price is greater than x%, please adjust your order price appropriately and try again.\nNote: 5% for BTCUSD, BTCUSDT, ETHUSD, ETHUSDT markets, and 10% for other contract markets",
	},
	4015: {
		message: "The current market depth is low, please reduce your selling amount appropriately and try again.",
		description:
			"The current market depth is insufficient, please reduce the selling volume appropriately and try again",
	}, //InsufficientMarketDepthError
	4016: {
		message: "read only",
		description: "Readable only",
	}, //ReadonlyResourceOnAPIError
};

/**
 * Response Status Code Map.
 * @readonly
 * @enum {String} RESPONSE_STATUS_CODES
 * @memberof HTTPConstants
 */
module.exports.RESPONSE_STATUS_CODES = {
	200: {
		message: "Succeeded",
		description: "Succeeded",
	},
	404: {
		message: "API does not exist",
		description: "API does not exist",
	},
};
