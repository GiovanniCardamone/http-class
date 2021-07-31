
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 408: Request Timeout
 */
export default class RequestTimeout extends HttpError {
	static CODE = 408

	constructor(mesg: string, data?: Literal) {
		super(RequestTimeout.CODE, 'Request Timeout', mesg, data)
	}
}
