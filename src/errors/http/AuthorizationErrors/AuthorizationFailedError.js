const AuthorizationError = require("./AuthorizationError");

/**
 * Authorization Failed Error
 * @class AuthorizationFailedError
 * @extends Error
 * @classdesc Authorization Failed Error Class
 * @memberof Errors.http
 */
module.exports = class AuthorizationFailedError extends AuthorizationError {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
