
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 431: Request Header Fields Too Large
 */
export default class RequestHeaderFieldsTooLarge extends HttpError {
	static CODE = 431

	constructor(mesg: string, data?: Literal) {
		super(RequestHeaderFieldsTooLarge.CODE, 'Request Header Fields Too Large', mesg, data)
	}
}
