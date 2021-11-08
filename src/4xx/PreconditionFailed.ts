
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 412: Precondition Failed
 */
@schema()
export default class PreconditionFailed extends HttpError {
	static CODE = 412

	constructor(mesg: string, data?: Literal) {
		super(PreconditionFailed.CODE, 'Precondition Failed', mesg, data)
	}
}
