
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 501: Not Implemented
 */
export default class NotImplemented extends HttpError {
	static CODE = 501

	constructor(mesg: string, data?: Literal) {
		super(NotImplemented.CODE, 'Not Implemented', mesg, data)
	}
}
