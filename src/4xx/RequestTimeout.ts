
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 408: Request Timeout
 */
@schema({ description: 'Request Timeout' })
export default class RequestTimeout extends HttpError {
	static CODE = 408

	constructor(mesg: string, info?: ErrorInfo) {
		super(RequestTimeout.CODE, info?.name || 'Request Timeout', mesg, info?.key, info?.data)
	}
}
