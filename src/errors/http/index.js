/**
 * @fileOverview HTTP/Rest Error Classes
 * @namespace Errors.http
 * @memberof Errors
 */
module.exports = {
	...require("./InvalidErrors"),
	...require("./ServiceErrors"),
	...require("./DoesNotExistsErrors"),
	...require("./AuthorizationErrors"),
	SendingRequestFailedError: require("./APIErrors/SendingRequestFailedError"),
	SignatureError: require("./APIErrors/SignatureError"),
	NoResponseFromServerError: require("./APIErrors/NoResponseFromServerError"),
};
