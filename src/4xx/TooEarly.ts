
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 425: Too Early
 */
export default class TooEarly extends HttpError {
	static CODE = 425

	constructor(mesg: string, data?: Literal) {
		super(TooEarly.CODE, 'Too Early', mesg, data)
	}
}
