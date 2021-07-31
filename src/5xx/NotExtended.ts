
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 510: Not Extended
 */
export default class NotExtended extends HttpError {
	static CODE = 510

	constructor(mesg: string, data?: Literal) {
		super(NotExtended.CODE, 'Not Extended', mesg, data)
	}
}
