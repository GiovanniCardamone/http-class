
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 506: Variant Also Negotiates
 */
@schema()
export default class VariantAlsoNegotiates extends HttpError {
	static CODE = 506

	constructor(mesg: string, info?: ErrorInfo) {
		super(VariantAlsoNegotiates.CODE, info?.name || 'Variant Also Negotiates', mesg, info?.key, info?.data)
	}
}
