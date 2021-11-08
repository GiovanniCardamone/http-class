
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 410: Gone
 */
@schema()
export default class Gone extends HttpError {
	static CODE = 410

	constructor(mesg: string, data?: Literal) {
		super(Gone.CODE, 'Gone', mesg, data)
	}
}
