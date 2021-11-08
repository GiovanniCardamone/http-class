
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 429: Too Many Requests
 */
@schema()
export default class TooManyRequests extends HttpError {
	static CODE = 429

	constructor(mesg: string, data?: Literal) {
		super(TooManyRequests.CODE, 'Too Many Requests', mesg, data)
	}
}
