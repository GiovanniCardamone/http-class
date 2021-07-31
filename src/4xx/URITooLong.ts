
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 414: URI Too Long
 */
export default class URITooLong extends HttpError {
	static CODE = 414

	constructor(mesg: string, data?: Literal) {
		super(URITooLong.CODE, 'URI Too Long', mesg, data)
	}
}
