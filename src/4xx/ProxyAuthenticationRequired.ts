
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 407: Proxy Authentication Required
 */
@schema()
export default class ProxyAuthenticationRequired extends HttpError {
	static CODE = 407

	constructor(mesg: string, data?: Literal) {
		super(ProxyAuthenticationRequired.CODE, 'Proxy Authentication Required', mesg, data)
	}
}
