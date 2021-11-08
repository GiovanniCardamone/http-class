
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 426: Upgrade Required
 */
@schema()
export default class UpgradeRequired extends HttpError {
	static CODE = 426

	constructor(mesg: string, data?: Literal) {
		super(UpgradeRequired.CODE, 'Upgrade Required', mesg, data)
	}
}
