
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 416: Range Not Satisfiable
 */
export default class RangeNotSatisfiable extends HttpError {
	static CODE = 416

	constructor(mesg: string, data?: Literal) {
		super(RangeNotSatisfiable.CODE, 'Range Not Satisfiable', mesg, data)
	}
}
