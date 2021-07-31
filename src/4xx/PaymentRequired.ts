
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 402: Payment Required
 */
export default class PaymentRequired extends HttpError {
	static CODE = 402

	constructor(mesg: string, data?: Literal) {
		super(PaymentRequired.CODE, 'Payment Required', mesg, data)
	}
}
