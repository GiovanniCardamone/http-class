import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 502: Bad Gateway
 */
@schema({ description: "Bad Gateway" })
export default class BadGateway extends HttpError {
	static CODE = 502;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			BadGateway.CODE,
			info?.name || "Bad Gateway",
			mesg,
			info?.key,
			info?.data
		);
	}
}
