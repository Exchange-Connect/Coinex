import { AuthorizationError } from "./AuthorizationError";

/**
 * Authorization Header Missing Error
 * @class AuthorizationHeaderMissingError
 * @extends AuthorizationError
 * @classdesc Authorization Header Missing Error Class
 * @memberof Errors.http
 */
export class AuthorizationHeaderMissingError extends AuthorizationError {
	description: string;
	constructor(message: string, description: string) {
		super(message);
		this.description = description;
	}
};
