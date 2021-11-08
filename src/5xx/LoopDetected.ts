
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 508: Loop Detected
 */
@schema()
export default class LoopDetected extends HttpError {
	static CODE = 508

	constructor(mesg: string, data?: Literal) {
		super(LoopDetected.CODE, 'Loop Detected', mesg, data)
	}
}
