
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 511: Network Authentication Required
 */
@schema()
export default class NetworkAuthenticationRequired extends HttpError {
	static CODE = 511

	constructor(mesg: string, info?: ErrorInfo) {
		super(NetworkAuthenticationRequired.CODE, info?.name || 'Network Authentication Required', mesg, info?.key, info?.data)
	}
}
