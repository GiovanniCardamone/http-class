
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 423: Locked
 */
@schema({ description: 'Locked' })
export default class Locked extends HttpError {
	static CODE = 423

	constructor(mesg: string, info?: ErrorInfo) {
		super(Locked.CODE, info?.name || 'Locked', mesg, info?.key, info?.data)
	}
}
