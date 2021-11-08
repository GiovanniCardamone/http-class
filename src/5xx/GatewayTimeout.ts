
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 504: Gateway Timeout
 */
@schema()
export default class GatewayTimeout extends HttpError {
	static CODE = 504

	constructor(mesg: string, data?: Literal) {
		super(GatewayTimeout.CODE, 'Gateway Timeout', mesg, data)
	}
}
