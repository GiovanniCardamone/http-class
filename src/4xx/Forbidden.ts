
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 403: Forbidden
 */
@schema()
export default class Forbidden extends HttpError {
	static CODE = 403

	constructor(mesg: string, info?: ErrorInfo) {
		super(Forbidden.CODE, info?.name || 'Forbidden', mesg, info?.key, info?.data)
	}
}
