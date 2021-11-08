
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 417: Expectation Failed
 */
@schema()
export default class ExpectationFailed extends HttpError {
	static CODE = 417

	constructor(mesg: string, data?: Literal) {
		super(ExpectationFailed.CODE, 'Expectation Failed', mesg, data)
	}
}
