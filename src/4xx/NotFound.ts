import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 404: Not Found
 */
@schema({ description: "Not Found" })
export default class NotFound extends HttpError {
	static CODE = 404;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			NotFound.CODE,
			info?.name || "Not Found",
			mesg,
			info?.key,
			info?.data
		);
	}
}
