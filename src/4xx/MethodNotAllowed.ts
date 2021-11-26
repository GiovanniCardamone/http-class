
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 405: Method Not Allowed
 */
@schema({ description: 'Method Not Allowed' })
export default class MethodNotAllowed extends HttpError {
	static CODE = 405

	constructor(mesg: string, info?: ErrorInfo) {
		super(MethodNotAllowed.CODE, info?.name || 'Method Not Allowed', mesg, info?.key, info?.data)
	}
}
