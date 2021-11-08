
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 403: Forbidden
 */
@schema()
export default class Forbidden extends HttpError {
	static CODE = 403

	constructor(mesg: string, data?: Literal) {
		super(Forbidden.CODE, 'Forbidden', mesg, data)
	}
}
