
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 421: Misdirected Request
 */
@schema({ description: 'Misdirected Request' })
export default class MisdirectedRequest extends HttpError {
	static CODE = 421

	constructor(mesg: string, info?: ErrorInfo) {
		super(MisdirectedRequest.CODE, info?.name || 'Misdirected Request', mesg, info?.key, info?.data)
	}
}
