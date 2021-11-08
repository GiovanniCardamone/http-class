
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 507: Insufficient Storage
 */
@schema()
export default class InsufficientStorage extends HttpError {
	static CODE = 507

	constructor(mesg: string, data?: Literal) {
		super(InsufficientStorage.CODE, 'Insufficient Storage', mesg, data)
	}
}
