
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 411: Length Required
 */
@schema()
export default class LengthRequired extends HttpError {
	static CODE = 411

	constructor(mesg: string, data?: Literal) {
		super(LengthRequired.CODE, 'Length Required', mesg, data)
	}
}
