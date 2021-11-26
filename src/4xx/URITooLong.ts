
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 414: URI Too Long
 */
@schema({ description: 'URI Too Long' })
export default class URITooLong extends HttpError {
	static CODE = 414

	constructor(mesg: string, info?: ErrorInfo) {
		super(URITooLong.CODE, info?.name || 'URI Too Long', mesg, info?.key, info?.data)
	}
}
