
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 429: Too Many Requests
 */
@schema()
export default class TooManyRequests extends HttpError {
	static CODE = 429

	constructor(mesg: string, info?: ErrorInfo) {
		super(TooManyRequests.CODE, info?.name || 'Too Many Requests', mesg, info?.key, info?.data)
	}
}
