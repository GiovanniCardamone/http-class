
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 407: Proxy Authentication Required
 */
export default class ProxyAuthenticationRequired extends HttpError {
	static CODE = 407

	constructor(mesg: string, data?: Literal) {
		super(ProxyAuthenticationRequired.CODE, 'Proxy Authentication Required', mesg, data)
	}
}
