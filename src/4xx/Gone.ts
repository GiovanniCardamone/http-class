import HttpError, { Literal, ErrorInfo } from "../HttpError";
import { schema } from "class-schema";

/**
 * Http Error 410: Gone
 */
@schema({ description: "Gone" })
export default class Gone extends HttpError {
	static CODE = 410;

	constructor(mesg: string, info?: ErrorInfo) {
		super(Gone.CODE, info?.name || "Gone", mesg, info?.key, info?.data);
	}
}
