
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 418: Im a teapot
 */
@schema()
export default class Imateapot extends HttpError {
	static CODE = 418

	constructor(mesg: string, data?: Literal) {
		super(Imateapot.CODE, 'Im a teapot', mesg, data)
	}
}
