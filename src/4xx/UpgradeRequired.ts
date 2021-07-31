
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 426: Upgrade Required
 */
export default class UpgradeRequired extends HttpError {
	static CODE = 426

	constructor(mesg: string, data?: Literal) {
		super(UpgradeRequired.CODE, 'Upgrade Required', mesg, data)
	}
}
