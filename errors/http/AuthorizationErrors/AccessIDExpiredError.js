const AuthorizationError = require("./AuthorizationError");

/**
 * Access ID Expired Error
 * @class AccessIDExpiredError
 * @extends AuthorizationError
 * @classdesc Access ID Expired Error Class
 * @memberof Errors.http
 */
module.exports = class AccessIDExpiredError extends AuthorizationError {
	constructor(message) {
		super(message);
	}
};
