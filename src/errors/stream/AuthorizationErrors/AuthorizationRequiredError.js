/**
 * Authorization Required Error
 * @class AuthorizationRequiredError
 * @extends Error
 * @classdesc Authorization Required Error Class
 * @memberof Errors.http
 */
module.exports = class AuthorizationRequiredError extends Error {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
