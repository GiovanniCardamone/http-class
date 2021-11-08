
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 503: Service Unavailable
 */
@schema()
export default class ServiceUnavailable extends HttpError {
	static CODE = 503

	constructor(mesg: string, data?: Literal) {
		super(ServiceUnavailable.CODE, 'Service Unavailable', mesg, data)
	}
}
