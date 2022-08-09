const AuthorizationError = require("./AuthorizationError");

/**
 * Authorization Header Missing Error
 * @class AuthorizationHeaderMissingError
 * @extends Error
 * @classdesc Authorization Header Missing Error Class
 * @memberof Errors.http
 */
module.exports = class AuthorizationHeaderMissingError extends AuthorizationError {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
