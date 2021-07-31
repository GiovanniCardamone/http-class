
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 429: Too Many Requests
 */
export default class TooManyRequests extends HttpError {
	static CODE = 429

	constructor(mesg: string, data?: Literal) {
		super(TooManyRequests.CODE, 'Too Many Requests', mesg, data)
	}
}
