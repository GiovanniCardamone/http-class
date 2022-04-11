import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 501: Not Implemented
 */
@schema({ description: "Not Implemented" })
export default class NotImplemented extends HttpError {
	static CODE = 501;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			NotImplemented.CODE,
			info?.name || "Not Implemented",
			mesg,
			info?.key,
			info?.data
		);
	}
}
