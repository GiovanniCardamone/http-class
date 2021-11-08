
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 409: Conflict
 */
@schema()
export default class Conflict extends HttpError {
	static CODE = 409

	constructor(mesg: string, data?: Literal) {
		super(Conflict.CODE, 'Conflict', mesg, data)
	}
}
