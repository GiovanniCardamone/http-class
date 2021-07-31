
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 406: Not Acceptable
 */
export default class NotAcceptable extends HttpError {
	static CODE = 406

	constructor(mesg: string, data?: Literal) {
		super(NotAcceptable.CODE, 'Not Acceptable', mesg, data)
	}
}
