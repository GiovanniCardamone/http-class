
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 500: Internal Server Error
 */
@schema()
export default class InternalServerError extends HttpError {
	static CODE = 500

	constructor(mesg: string, data?: Literal) {
		super(InternalServerError.CODE, 'Internal Server Error', mesg, data)
	}
}
