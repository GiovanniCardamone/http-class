import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 431: Request Header Fields Too Large
 */
@schema({ description: "Request Header Fields Too Large" })
export default class RequestHeaderFieldsTooLarge extends HttpError {
	static CODE = 431;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			RequestHeaderFieldsTooLarge.CODE,
			info?.name || "Request Header Fields Too Large",
			mesg,
			info?.key,
			info?.data
		);
	}
}
