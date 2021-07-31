
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 400: Bad Request
 */
export default class BadRequest extends HttpError {
	static CODE = 400

	constructor(mesg: string, data?: Literal) {
		super(BadRequest.CODE, 'Bad Request', mesg, data)
	}
}
