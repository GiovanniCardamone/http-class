
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 402: Payment Required
 */
@schema()
export default class PaymentRequired extends HttpError {
	static CODE = 402

	constructor(mesg: string, data?: Literal) {
		super(PaymentRequired.CODE, 'Payment Required', mesg, data)
	}
}
