
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 423: Locked
 */
@schema()
export default class Locked extends HttpError {
	static CODE = 423

	constructor(mesg: string, data?: Literal) {
		super(Locked.CODE, 'Locked', mesg, data)
	}
}
