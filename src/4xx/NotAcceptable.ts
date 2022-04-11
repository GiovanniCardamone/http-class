import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 406: Not Acceptable
 */
@schema({ description: "Not Acceptable" })
export default class NotAcceptable extends HttpError {
	static CODE = 406;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			NotAcceptable.CODE,
			info?.name || "Not Acceptable",
			mesg,
			info?.key,
			info?.data
		);
	}
}
