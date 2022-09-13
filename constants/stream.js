module.exports.WEBSOCKET_CONNECTION_STATES = {
	OPEN: "open",
	MESSAGE: "message",
};

/**
 * WebSocket Futures Response Code Map.
 * @enum {Object} WEBSOCKET_FUTURES_RESPONSE_CODES
 * @memberof HTTPConstants
 */
module.exports.WEBSOCKET_FUTURES_RESPONSE_CODES = {
	/** Contract Invalid Argument */
	1001: {
		message: "invalid argument",
		description: "Contract invalid argument",
	},
	/** Service Unavailable */
	1002: {
		message: "service unavailable",
		description: "Service unavailable",
	},
	/** Service Timeout */
	1003: {
		message: "service timeout",
		description: "Service timeout",
	},
	/** Invalid method */
	1004: {
		message: "unknown method",
		description: "Invalid method",
	},
	1005: {
		message: "require auth",
		description: "Authorization required",
	},
	1006: {
		message: "internal error",
		description: "Contract internal error",
	},
	1007: {
		message: "direct result null",
		description: "No market found",
	},
	1009: {
		message: "authorization fail",
		description: "Authorization failed",
	},
	1010: {
		message: "access_id not exists",
		description: "AccessId does not exist",
	},
	1011: {
		message: "time check error",
		description: "Time check error",
	},
	1012: {
		message: "user is forbidden",
		description: "User prohibited",
	},
	1013: {
		message: "ip not allow visit",
		description: "IP access prohibited",
	},
	1014: {
		message: "too quick",
		description: "Visit too frequent",
	},
	3008: {
		message: "service too busy",
		description: "Service is busy",
	},
};

/**
 * WebSocket Spot Response Code Map.
 * @enum {Object} WEBSOCKET_SPOT_RESPONSE_CODES
 * @memberof HTTPConstants
 */
module.exports.WEBSOCKET_SPOT_RESPONSE_CODES = {
	/** Contract Invalid Argument */
	1: {
		message: "invalid argument",
		description: "Contract invalid argument",
	},
	/** Internal Error */
	2: {
		message: "internal error",
		description: "Contract internal error",
	},
	/** Service Unavailable */
	3: {
		message: "service unavailable",
		description: "Service unavailable",
	},
	/** Invalid method */
	4: {
		message: "method not found",
		description: "No method found",
	},
	/** Service Timeout */
	5: {
		message: "service timeout",
		description: "Service timeout",
	},
	/** Authorization Required */
	6: {
		message: "require auth",
		description: "Authorization required",
	},
	/** Visited Too Frequently */
	7: {
		message: "too quick",
		description: "Visit too frequent",
	},
};
