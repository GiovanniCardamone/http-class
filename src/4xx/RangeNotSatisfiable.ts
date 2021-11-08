
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 416: Range Not Satisfiable
 */
@schema()
export default class RangeNotSatisfiable extends HttpError {
	static CODE = 416

	constructor(mesg: string, data?: Literal) {
		super(RangeNotSatisfiable.CODE, 'Range Not Satisfiable', mesg, data)
	}
}
