/**
 * IP Prohibited Error
 * @class IPProhibitedError
 * @extends Error
 * @classdesc IP Prohibited Error Class
 * @memberof Errors.http
 */
module.exports = class IPProhibitedError extends Error {
	constructor(message, description) {
		super(message);
		this.description = description;
	}
};
