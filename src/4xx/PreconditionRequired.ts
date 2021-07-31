
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 428: Precondition Required
 */
export default class PreconditionRequired extends HttpError {
	static CODE = 428

	constructor(mesg: string, data?: Literal) {
		super(PreconditionRequired.CODE, 'Precondition Required', mesg, data)
	}
}
