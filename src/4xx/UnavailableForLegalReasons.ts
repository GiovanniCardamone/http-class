
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 451: Unavailable For Legal Reasons
 */
@schema()
export default class UnavailableForLegalReasons extends HttpError {
	static CODE = 451

	constructor(mesg: string, info?: ErrorInfo) {
		super(UnavailableForLegalReasons.CODE, info?.name || 'Unavailable For Legal Reasons', mesg, info?.key, info?.data)
	}
}
