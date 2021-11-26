
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 507: Insufficient Storage
 */
@schema({ description: 'Insufficient Storage' })
export default class InsufficientStorage extends HttpError {
	static CODE = 507

	constructor(mesg: string, info?: ErrorInfo) {
		super(InsufficientStorage.CODE, info?.name || 'Insufficient Storage', mesg, info?.key, info?.data)
	}
}
