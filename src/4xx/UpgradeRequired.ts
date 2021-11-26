
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 426: Upgrade Required
 */
@schema({ description: 'Upgrade Required' })
export default class UpgradeRequired extends HttpError {
	static CODE = 426

	constructor(mesg: string, info?: ErrorInfo) {
		super(UpgradeRequired.CODE, info?.name || 'Upgrade Required', mesg, info?.key, info?.data)
	}
}
