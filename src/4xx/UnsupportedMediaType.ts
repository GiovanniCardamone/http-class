
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 415: Unsupported Media Type
 */
@schema({ description: 'Unsupported Media Type' })
export default class UnsupportedMediaType extends HttpError {
	static CODE = 415

	constructor(mesg: string, info?: ErrorInfo) {
		super(UnsupportedMediaType.CODE, info?.name || 'Unsupported Media Type', mesg, info?.key, info?.data)
	}
}
