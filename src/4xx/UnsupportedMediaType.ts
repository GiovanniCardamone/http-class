
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 415: Unsupported Media Type
 */
export default class UnsupportedMediaType extends HttpError {
	static CODE = 415

	constructor(mesg: string, data?: Literal) {
		super(UnsupportedMediaType.CODE, 'Unsupported Media Type', mesg, data)
	}
}
