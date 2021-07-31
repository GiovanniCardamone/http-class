
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 403: Forbidden
 */
export default class Forbidden extends HttpError {
	static CODE = 403

	constructor(mesg: string, data?: Literal) {
		super(Forbidden.CODE, 'Forbidden', mesg, data)
	}
}
