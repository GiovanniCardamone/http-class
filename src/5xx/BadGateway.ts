
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 502: Bad Gateway
 */
@schema()
export default class BadGateway extends HttpError {
	static CODE = 502

	constructor(mesg: string, data?: Literal) {
		super(BadGateway.CODE, 'Bad Gateway', mesg, data)
	}
}
