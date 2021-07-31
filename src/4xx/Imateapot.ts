
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 418: Im a teapot
 */
export default class Imateapot extends HttpError {
	static CODE = 418

	constructor(mesg: string, data?: Literal) {
		super(Imateapot.CODE, 'Im a teapot', mesg, data)
	}
}
