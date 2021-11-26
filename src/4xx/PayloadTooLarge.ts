
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 413: Payload Too Large
 */
@schema({ description: 'Payload Too Large' })
export default class PayloadTooLarge extends HttpError {
	static CODE = 413

	constructor(mesg: string, info?: ErrorInfo) {
		super(PayloadTooLarge.CODE, info?.name || 'Payload Too Large', mesg, info?.key, info?.data)
	}
}
