
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 508: Loop Detected
 */
@schema()
export default class LoopDetected extends HttpError {
	static CODE = 508

	constructor(mesg: string, info?: ErrorInfo) {
		super(LoopDetected.CODE, info?.name || 'Loop Detected', mesg, info?.key, info?.data)
	}
}
