
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 424: Failed Dependency
 */
@schema()
export default class FailedDependency extends HttpError {
	static CODE = 424

	constructor(mesg: string, data?: Literal) {
		super(FailedDependency.CODE, 'Failed Dependency', mesg, data)
	}
}
