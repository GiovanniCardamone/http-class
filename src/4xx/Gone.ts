
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 410: Gone
 */
export default class Gone extends HttpError {
	static CODE = 410

	constructor(mesg: string, data?: Literal) {
		super(Gone.CODE, 'Gone', mesg, data)
	}
}
