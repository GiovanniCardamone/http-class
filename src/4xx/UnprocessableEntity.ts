
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error 422: Unprocessable Entity
 */
@schema({ description: 'Unprocessable Entity' })
export default class UnprocessableEntity extends HttpError {
	static CODE = 422

	constructor(mesg: string, info?: ErrorInfo) {
		super(UnprocessableEntity.CODE, info?.name || 'Unprocessable Entity', mesg, info?.key, info?.data)
	}
}
