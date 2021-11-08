
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 401: Unauthorized
 */
@schema()
export default class Unauthorized extends HttpError {
	static CODE = 401

	constructor(mesg: string, data?: Literal) {
		super(Unauthorized.CODE, 'Unauthorized', mesg, data)
	}
}
