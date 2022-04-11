import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 416: Range Not Satisfiable
 */
@schema({ description: "Range Not Satisfiable" })
export default class RangeNotSatisfiable extends HttpError {
	static CODE = 416;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			RangeNotSatisfiable.CODE,
			info?.name || "Range Not Satisfiable",
			mesg,
			info?.key,
			info?.data
		);
	}
}
