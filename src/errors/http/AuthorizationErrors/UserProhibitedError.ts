import { AuthorizationError } from "./AuthorizationError";

/**
 * User Prohibited Error
 * @class UserProhibitedError
 * @extends AuthorizationError
 * @classdesc User Prohibited Error Class
 * @memberof Errors.http
 */
export class UserProhibitedError extends AuthorizationError {
	description: string;
	constructor(message: string, description: string) {
		super(message);
		this.description = description;
	}
};
