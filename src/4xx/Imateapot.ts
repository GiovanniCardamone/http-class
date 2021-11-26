
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 418: Im a teapot
 */
@schema({ description: 'Im a teapot' })
export default class Imateapot extends HttpError {
	static CODE = 418

	constructor(mesg: string, info?: ErrorInfo) {
		super(Imateapot.CODE, info?.name || 'Im a teapot', mesg, info?.key, info?.data)
	}
}
