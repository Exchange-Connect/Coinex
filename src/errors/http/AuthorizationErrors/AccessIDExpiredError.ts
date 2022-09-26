import { AuthorizationError } from "./AuthorizationError";

/**
 * Access ID Expired Error
 * @class AccessIDExpiredError
 * @extends AuthorizationError
 * @classdesc Access ID Expired Error Class
 * @memberof Errors.http
 */
export class AccessIDExpiredError extends AuthorizationError {
	constructor(message: string) {
		super(message);
	}
};
