import { AuthorizationError } from "./AuthorizationError";

/**
 * Un-Authorized Error
 * @class UnauthorizedError
 * @extends AuthorizationError
 * @classdesc Un-Authorized Error Class
 * @memberof Errors.http
 */
export class UnauthorizedError extends AuthorizationError {
	description: string;
	constructor(message: string, description: string) {
		super(message);
		this.description = description;
	}
};
