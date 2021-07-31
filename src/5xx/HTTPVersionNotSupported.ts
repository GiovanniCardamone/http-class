
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 505: HTTP Version Not Supported
 */
export default class HTTPVersionNotSupported extends HttpError {
	static CODE = 505

	constructor(mesg: string, data?: Literal) {
		super(HTTPVersionNotSupported.CODE, 'HTTP Version Not Supported', mesg, data)
	}
}
