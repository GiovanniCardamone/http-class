
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 509: Bandwidth Limit Exceeded
 */
@schema({ description: 'Bandwidth Limit Exceeded' })
export default class BandwidthLimitExceeded extends HttpError {
	static CODE = 509

	constructor(mesg: string, info?: ErrorInfo) {
		super(BandwidthLimitExceeded.CODE, info?.name || 'Bandwidth Limit Exceeded', mesg, info?.key, info?.data)
	}
}
