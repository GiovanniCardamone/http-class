
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 510: Not Extended
 */
@schema()
export default class NotExtended extends HttpError {
	static CODE = 510

	constructor(mesg: string, data?: Literal) {
		super(NotExtended.CODE, 'Not Extended', mesg, data)
	}
}
