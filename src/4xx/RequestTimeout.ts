
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 408: Request Timeout
 */
@schema()
export default class RequestTimeout extends HttpError {
	static CODE = 408

	constructor(mesg: string, data?: Literal) {
		super(RequestTimeout.CODE, 'Request Timeout', mesg, data)
	}
}
