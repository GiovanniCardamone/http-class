
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 504: Gateway Timeout
 */
export default class GatewayTimeout extends HttpError {
	static CODE = 504

	constructor(mesg: string, data?: Literal) {
		super(GatewayTimeout.CODE, 'Gateway Timeout', mesg, data)
	}
}
