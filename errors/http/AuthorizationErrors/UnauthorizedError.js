const AuthorizationError = require("./AuthorizationError");

/**
 * Un-Authorized Error
 * @class UnauthorizedError
 * @extends AuthorizationError
 * @classdesc Un-Authorized Error Class
 * @memberof Errors.http
 */
module.exports = class UnauthorizedError extends AuthorizationError {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
