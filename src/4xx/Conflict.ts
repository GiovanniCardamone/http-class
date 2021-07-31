
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 409: Conflict
 */
export default class Conflict extends HttpError {
	static CODE = 409

	constructor(mesg: string, data?: Literal) {
		super(Conflict.CODE, 'Conflict', mesg, data)
	}
}
