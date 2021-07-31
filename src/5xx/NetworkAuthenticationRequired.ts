
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 511: Network Authentication Required
 */
export default class NetworkAuthenticationRequired extends HttpError {
	static CODE = 511

	constructor(mesg: string, data?: Literal) {
		super(NetworkAuthenticationRequired.CODE, 'Network Authentication Required', mesg, data)
	}
}
