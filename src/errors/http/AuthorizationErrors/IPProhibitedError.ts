import { AuthorizationError } from "./AuthorizationError";

/**
 * IP Prohibited Error
 * @class IPProhibitedError
 * @extends AuthorizationError
 * @classdesc IP Prohibited Error Class
 * @memberof Errors.http
 */
export class IPProhibitedError extends AuthorizationError {
	description: string;
	constructor(message: string, description: string) {
		super(message);
		this.description = description;
	}
};
