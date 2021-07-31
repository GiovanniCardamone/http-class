
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 424: Failed Dependency
 */
export default class FailedDependency extends HttpError {
	static CODE = 424

	constructor(mesg: string, data?: Literal) {
		super(FailedDependency.CODE, 'Failed Dependency', mesg, data)
	}
}
