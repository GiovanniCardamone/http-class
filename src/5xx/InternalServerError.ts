
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 500: Internal Server Error
 */
export default class InternalServerError extends HttpError {
	static CODE = 500

	constructor(mesg: string, data?: Literal) {
		super(InternalServerError.CODE, 'Internal Server Error', mesg, data)
	}
}
