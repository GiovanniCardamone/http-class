
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 412: Precondition Failed
 */
export default class PreconditionFailed extends HttpError {
	static CODE = 412

	constructor(mesg: string, data?: Literal) {
		super(PreconditionFailed.CODE, 'Precondition Failed', mesg, data)
	}
}
