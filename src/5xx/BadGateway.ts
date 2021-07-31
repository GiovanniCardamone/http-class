
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 502: Bad Gateway
 */
export default class BadGateway extends HttpError {
	static CODE = 502

	constructor(mesg: string, data?: Literal) {
		super(BadGateway.CODE, 'Bad Gateway', mesg, data)
	}
}
