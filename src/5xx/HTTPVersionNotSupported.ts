
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 505: HTTP Version Not Supported
 */
@schema({ description: 'HTTP Version Not Supported' })
export default class HTTPVersionNotSupported extends HttpError {
	static CODE = 505

	constructor(mesg: string, info?: ErrorInfo) {
		super(HTTPVersionNotSupported.CODE, info?.name || 'HTTP Version Not Supported', mesg, info?.key, info?.data)
	}
}
