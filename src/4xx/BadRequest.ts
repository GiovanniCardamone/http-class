import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 400: Bad Request
 */
@schema({ description: "Bad Request" })
export default class BadRequest extends HttpError {
	static CODE = 400;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			BadRequest.CODE,
			info?.name || "Bad Request",
			mesg,
			info?.key,
			info?.data
		);
	}
}
