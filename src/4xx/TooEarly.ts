import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 425: Too Early
 */
@schema({ description: "Too Early" })
export default class TooEarly extends HttpError {
	static CODE = 425;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			TooEarly.CODE,
			info?.name || "Too Early",
			mesg,
			info?.key,
			info?.data
		);
	}
}
