import { AuthorizationError } from "./AuthorizationError";

/**
 * API Access Forbidden Error
 * @class APIAccessForbiddenError
 * @extends AuthorizationError
 * @classdesc API Access Forbidden Error Class
 * @memberof Errors.http
 */
export class APIAccessForbiddenError extends AuthorizationError {
	description: string;
	constructor(message: string, description: string) {
		super(message);
		this.description = description;
	}
};
