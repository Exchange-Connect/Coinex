const AuthorizationError = require("./AuthorizationError");

/**
 * IP Prohibited Error
 * @class IPProhibitedError
 * @extends Error
 * @classdesc IP Prohibited Error Class
 * @memberof Errors.http
 */
module.exports = class IPProhibitedError extends AuthorizationError {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
