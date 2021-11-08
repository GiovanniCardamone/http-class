
import HttpError, { Literal } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 422: Unprocessable Entity
 */
@schema()
export default class UnprocessableEntity extends HttpError {
	static CODE = 422

	constructor(mesg: string, data?: Literal) {
		super(UnprocessableEntity.CODE, 'Unprocessable Entity', mesg, data)
	}
}
