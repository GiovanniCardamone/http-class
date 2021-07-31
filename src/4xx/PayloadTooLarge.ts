
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 413: Payload Too Large
 */
export default class PayloadTooLarge extends HttpError {
	static CODE = 413

	constructor(mesg: string, data?: Literal) {
		super(PayloadTooLarge.CODE, 'Payload Too Large', mesg, data)
	}
}
