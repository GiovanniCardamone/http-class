import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 409: Conflict
 */
@schema({ description: "Conflict" })
export default class Conflict extends HttpError {
	static CODE = 409;

	constructor(mesg: string, info?: ErrorInfo) {
		super(Conflict.CODE, info?.name || "Conflict", mesg, info?.key, info?.data);
	}
}
