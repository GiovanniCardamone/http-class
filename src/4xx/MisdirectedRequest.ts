
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 421: Misdirected Request
 */
@schema()
export default class MisdirectedRequest extends HttpError {
	static CODE = 421

	constructor(mesg: string, data?: Literal) {
		super(MisdirectedRequest.CODE, 'Misdirected Request', mesg, data)
	}
}
