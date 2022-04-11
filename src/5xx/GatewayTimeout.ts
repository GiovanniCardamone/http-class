import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 504: Gateway Timeout
 */
@schema({ description: "Gateway Timeout" })
export default class GatewayTimeout extends HttpError {
	static CODE = 504;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			GatewayTimeout.CODE,
			info?.name || "Gateway Timeout",
			mesg,
			info?.key,
			info?.data
		);
	}
}
