
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 406: Not Acceptable
 */
@schema()
export default class NotAcceptable extends HttpError {
	static CODE = 406

	constructor(mesg: string, data?: Literal) {
		super(NotAcceptable.CODE, 'Not Acceptable', mesg, data)
	}
}
