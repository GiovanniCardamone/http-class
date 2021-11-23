
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 411: Length Required
 */
@schema()
export default class LengthRequired extends HttpError {
	static CODE = 411

	constructor(mesg: string, info?: ErrorInfo) {
		super(LengthRequired.CODE, info?.name || 'Length Required', mesg, info?.key, info?.data)
	}
}
