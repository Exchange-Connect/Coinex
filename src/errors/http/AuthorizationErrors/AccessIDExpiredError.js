/**
 * Access ID Expired Error
 * @class AccessIDExpiredError
 * @extends Error
 * @classdesc Access ID Expired Error Class
 * @memberof Errors.http
 */
module.exports = class AccessIDExpiredError extends Error {
	constructor(message) {
		super(message);
	}
};
