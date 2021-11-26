
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 412: Precondition Failed
 */
@schema({ description: 'Precondition Failed' })
export default class PreconditionFailed extends HttpError {
	static CODE = 412

	constructor(mesg: string, info?: ErrorInfo) {
		super(PreconditionFailed.CODE, info?.name || 'Precondition Failed', mesg, info?.key, info?.data)
	}
}
