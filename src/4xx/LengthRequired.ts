
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 411: Length Required
 */
export default class LengthRequired extends HttpError {
	static CODE = 411

	constructor(mesg: string, data?: Literal) {
		super(LengthRequired.CODE, 'Length Required', mesg, data)
	}
}
