
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 425: Too Early
 */
@schema()
export default class TooEarly extends HttpError {
	static CODE = 425

	constructor(mesg: string, data?: Literal) {
		super(TooEarly.CODE, 'Too Early', mesg, data)
	}
}
