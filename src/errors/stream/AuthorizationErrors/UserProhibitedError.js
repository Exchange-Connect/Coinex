/**
 * User Prohibited Error
 * @class UserProhibitedError
 * @extends Error
 * @classdesc User Prohibited Error Class
 * @memberof Errors.http
 */
module.exports = class UserProhibitedError extends Error {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
