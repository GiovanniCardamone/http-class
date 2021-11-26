
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 424: Failed Dependency
 */
@schema({ description: 'Failed Dependency' })
export default class FailedDependency extends HttpError {
	static CODE = 424

	constructor(mesg: string, info?: ErrorInfo) {
		super(FailedDependency.CODE, info?.name || 'Failed Dependency', mesg, info?.key, info?.data)
	}
}
