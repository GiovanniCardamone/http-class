
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 401: Unauthorized
 */
export default class Unauthorized extends HttpError {
	static CODE = 401

	constructor(mesg: string, data?: Literal) {
		super(Unauthorized.CODE, 'Unauthorized', mesg, data)
	}
}
