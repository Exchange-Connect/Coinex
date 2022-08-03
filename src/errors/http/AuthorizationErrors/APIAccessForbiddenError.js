/**
 * API Access Forbidden Error
 * @class APIAccessForbiddenError
 * @extends Error
 * @classdesc API Access Forbidden Error Class
 * @memberof Errors.http
 */
module.exports = class APIAccessForbiddenError extends Error {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
