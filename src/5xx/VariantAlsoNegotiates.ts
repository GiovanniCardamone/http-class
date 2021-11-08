
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 506: Variant Also Negotiates
 */
@schema()
export default class VariantAlsoNegotiates extends HttpError {
	static CODE = 506

	constructor(mesg: string, data?: Literal) {
		super(VariantAlsoNegotiates.CODE, 'Variant Also Negotiates', mesg, data)
	}
}
