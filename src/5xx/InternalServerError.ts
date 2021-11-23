
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 500: Internal Server Error
 */
@schema()
export default class InternalServerError extends HttpError {
	static CODE = 500

	constructor(mesg: string, info?: ErrorInfo) {
		super(InternalServerError.CODE, info?.name || 'Internal Server Error', mesg, info?.key, info?.data)
	}
}
