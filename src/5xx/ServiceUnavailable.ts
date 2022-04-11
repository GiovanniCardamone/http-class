import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 503: Service Unavailable
 */
@schema({ description: "Service Unavailable" })
export default class ServiceUnavailable extends HttpError {
	static CODE = 503;

	constructor(mesg: string, info?: ErrorInfo) {
		super(
			ServiceUnavailable.CODE,
			info?.name || "Service Unavailable",
			mesg,
			info?.key,
			info?.data
		);
	}
}
