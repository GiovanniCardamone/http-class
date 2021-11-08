
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 505: HTTP Version Not Supported
 */
@schema()
export default class HTTPVersionNotSupported extends HttpError {
	static CODE = 505

	constructor(mesg: string, data?: Literal) {
		super(HTTPVersionNotSupported.CODE, 'HTTP Version Not Supported', mesg, data)
	}
}
