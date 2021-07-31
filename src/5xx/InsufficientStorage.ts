
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 507: Insufficient Storage
 */
export default class InsufficientStorage extends HttpError {
	static CODE = 507

	constructor(mesg: string, data?: Literal) {
		super(InsufficientStorage.CODE, 'Insufficient Storage', mesg, data)
	}
}
