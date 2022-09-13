/**
 * @fileOverview HTTP/Rest Error Classes
 * @namespace Errors.http
 * @memberof Errors
 */
module.exports = {
	...require("./InvalidErrors"),
	...require("./ServiceErrors"),
	...require("./DoesNotExistsErrors"),
	...require("./AlreadyExistsErrors"),
	...require("./AuthorizationErrors"),
	...require("./APIErrors"),
	SendingRequestFailedError: require("./APIErrors/SendingRequestFailedError"),
	SignatureError: require("./APIErrors/SignatureError"),
	NoResponseFromServerError: require("./APIErrors/NoResponseFromServerError"),
};
