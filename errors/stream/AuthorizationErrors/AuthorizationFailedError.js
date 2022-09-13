/**
 * Authorization Failed Error
 * @class AuthorizationFailedError
 * @extends Error
 * @classdesc Authorization Failed Error Class
 * @memberof Errors.http
 */
module.exports = class AuthorizationFailedError extends Error {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
