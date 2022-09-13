const AuthorizationError = require("./AuthorizationError");

/**
 * User Prohibited Error
 * @class UserProhibitedError
 * @extends AuthorizationError
 * @classdesc User Prohibited Error Class
 * @memberof Errors.http
 */
module.exports = class UserProhibitedError extends AuthorizationError {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
