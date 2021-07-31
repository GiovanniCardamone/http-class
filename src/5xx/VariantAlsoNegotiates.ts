
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 506: Variant Also Negotiates
 */
export default class VariantAlsoNegotiates extends HttpError {
	static CODE = 506

	constructor(mesg: string, data?: Literal) {
		super(VariantAlsoNegotiates.CODE, 'Variant Also Negotiates', mesg, data)
	}
}
