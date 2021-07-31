
import HttpError, { Literal } from '../HttpError'

/**
 * Http Error 508: Loop Detected
 */
export default class LoopDetected extends HttpError {
	static CODE = 508

	constructor(mesg: string, data?: Literal) {
		super(LoopDetected.CODE, 'Loop Detected', mesg, data)
	}
}
