
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 428: Precondition Required
 */
@schema()
export default class PreconditionRequired extends HttpError {
	static CODE = 428

	constructor(mesg: string, data?: Literal) {
		super(PreconditionRequired.CODE, 'Precondition Required', mesg, data)
	}
}
