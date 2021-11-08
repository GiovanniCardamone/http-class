
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 431: Request Header Fields Too Large
 */
@schema()
export default class RequestHeaderFieldsTooLarge extends HttpError {
	static CODE = 431

	constructor(mesg: string, data?: Literal) {
		super(RequestHeaderFieldsTooLarge.CODE, 'Request Header Fields Too Large', mesg, data)
	}
}
