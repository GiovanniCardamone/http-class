import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 428: Precondition Required
 */
@schema({ description: "Precondition Required" })
export default class PreconditionRequired extends HttpError {
	static CODE = 428;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			PreconditionRequired.CODE,
			info?.name || "Precondition Required",
			mesg,
			info?.key,
			info?.data
		);
	}
}
