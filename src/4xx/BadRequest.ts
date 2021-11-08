
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 400: Bad Request
 */
@schema()
export default class BadRequest extends HttpError {
	static CODE = 400

	constructor(mesg: string, data?: Literal) {
		super(BadRequest.CODE, 'Bad Request', mesg, data)
	}
}
