
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 401: Unauthorized
 */
@schema({ description: 'Unauthorized' })
export default class Unauthorized extends HttpError {
	static CODE = 401

	constructor(mesg: string, info?: ErrorInfo) {
		super(Unauthorized.CODE, info?.name || 'Unauthorized', mesg, info?.key, info?.data)
	}
}
