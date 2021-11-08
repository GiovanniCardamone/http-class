import { schema, prop } from 'class-schema'
export type Literal = { [key: string]: any }

/**
 *
 */
@schema()
export default class HttpError extends Error {
	static CODE = -1

	@prop()
	statusCode: number

	@prop()
	name: string

	@prop()
	message: string

	@prop({ required: false })
	data?: Literal

	constructor(
		statusCode: number,
		name: string,
		message: string,
		data?: Literal
	) {
		super(`${name} [${statusCode}]: ${message}`)
		this.statusCode = statusCode
		this.name = name
		this.message = message
		this.data = data
	}
}

/**
 *
 */
export class GenericHttpError extends HttpError {

}
