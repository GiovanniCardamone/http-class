
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 417: Expectation Failed
 */
@schema({ description: 'Expectation Failed' })
export default class ExpectationFailed extends HttpError {
	static CODE = 417

	constructor(mesg: string, info?: ErrorInfo) {
		super(ExpectationFailed.CODE, info?.name || 'Expectation Failed', mesg, info?.key, info?.data)
	}
}
