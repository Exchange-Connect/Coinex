import { AuthorizationError } from "./AuthorizationError";

/**
 * Authorization Failed Error
 * @class AuthorizationFailedError
 * @extends AuthorizationError
 * @classdesc Authorization Failed Error Class
 * @memberof Errors.http
 */
export class AuthorizationFailedError extends AuthorizationError {
	description: string;
	constructor(message: string, description: string) {
		super(message);
		this.description = description;
	}
};
