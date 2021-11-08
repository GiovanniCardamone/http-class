
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 405: Method Not Allowed
 */
@schema()
export default class MethodNotAllowed extends HttpError {
	static CODE = 405

	constructor(mesg: string, data?: Literal) {
		super(MethodNotAllowed.CODE, 'Method Not Allowed', mesg, data)
	}
}
