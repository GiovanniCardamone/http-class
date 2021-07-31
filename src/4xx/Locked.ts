
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 423: Locked
 */
export default class Locked extends HttpError {
	static CODE = 423

	constructor(mesg: string, data?: Literal) {
		super(Locked.CODE, 'Locked', mesg, data)
	}
}
