
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 405: Method Not Allowed
 */
export default class MethodNotAllowed extends HttpError {
	static CODE = 405

	constructor(mesg: string, data?: Literal) {
		super(MethodNotAllowed.CODE, 'Method Not Allowed', mesg, data)
	}
}
