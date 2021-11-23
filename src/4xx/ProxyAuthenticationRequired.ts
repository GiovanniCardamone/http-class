
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 407: Proxy Authentication Required
 */
@schema()
export default class ProxyAuthenticationRequired extends HttpError {
	static CODE = 407

	constructor(mesg: string, info?: ErrorInfo) {
		super(ProxyAuthenticationRequired.CODE, info?.name || 'Proxy Authentication Required', mesg, info?.key, info?.data)
	}
}
