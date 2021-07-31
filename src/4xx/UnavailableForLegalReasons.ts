
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 451: Unavailable For Legal Reasons
 */
export default class UnavailableForLegalReasons extends HttpError {
	static CODE = 451

	constructor(mesg: string, data?: Literal) {
		super(UnavailableForLegalReasons.CODE, 'Unavailable For Legal Reasons', mesg, data)
	}
}
