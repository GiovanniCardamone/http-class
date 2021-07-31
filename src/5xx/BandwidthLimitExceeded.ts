
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 509: Bandwidth Limit Exceeded
 */
export default class BandwidthLimitExceeded extends HttpError {
	static CODE = 509

	constructor(mesg: string, data?: Literal) {
		super(BandwidthLimitExceeded.CODE, 'Bandwidth Limit Exceeded', mesg, data)
	}
}
