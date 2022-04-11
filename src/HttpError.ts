import { schema, prop } from "class-schema";
export type Literal = { [key: string]: any };

export interface ErrorInfo {
	name?: string;
	key?: string;
	data?: Literal;
}

/**
 *
 */
@schema()
export default class HttpError extends Error {
	static CODE = -1;

	@prop()
	statusCode: number;

	@prop()
	name: string;

	@prop()
	message: string;

	@prop(String, { required: false })
	key?: string;

	@prop(String, { required: false })
	data?: Literal;

	constructor(
		statusCode: number,
		name: string,
		message: string,
		key?: string,
		data?: Literal
	) {
		super(`${name} [${statusCode}]: ${message}`);
		this.statusCode = statusCode;
		this.name = name;
		this.message = message;
		this.key = key;
		this.data = data;
	}
}

/**
 *
 */
export class GenericHttpError extends HttpError {}
