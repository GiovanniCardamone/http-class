export type Literal = { [key: string]: any }

/**
 *
 */
export default abstract class HttpError extends Error {
	static CODE = -1

	constructor(
		readonly code: number,
		readonly name: string,
		readonly mesg: string,
		readonly data?: Literal
	) {
		super(`${name} [${code}]: ${mesg}`)
	}
}

