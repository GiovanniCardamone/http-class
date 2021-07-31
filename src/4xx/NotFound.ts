
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 404: Not Found
 */
export default class NotFound extends HttpError {
	static CODE = 404

	constructor(mesg: string, data?: Literal) {
		super(NotFound.CODE, 'Not Found', mesg, data)
	}
}