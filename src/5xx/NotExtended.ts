
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 510: Not Extended
 */
@schema()
export default class NotExtended extends HttpError {
	static CODE = 510

	constructor(mesg: string, info?: ErrorInfo) {
		super(NotExtended.CODE, info?.name || 'Not Extended', mesg, info?.key, info?.data)
	}
}
