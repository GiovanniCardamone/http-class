
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 511: Network Authentication Required
 */
@schema()
export default class NetworkAuthenticationRequired extends HttpError {
	static CODE = 511

	constructor(mesg: string, data?: Literal) {
		super(NetworkAuthenticationRequired.CODE, 'Network Authentication Required', mesg, data)
	}
}
