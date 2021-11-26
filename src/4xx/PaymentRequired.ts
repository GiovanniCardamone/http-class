
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 402: Payment Required
 */
@schema({ description: 'Payment Required' })
export default class PaymentRequired extends HttpError {
	static CODE = 402

	constructor(mesg: string, info?: ErrorInfo) {
		super(PaymentRequired.CODE, info?.name || 'Payment Required', mesg, info?.key, info?.data)
	}
}
