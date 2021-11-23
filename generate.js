// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const template = `
import HttpError, { Literal, ErrorInfo } from '../HttpError'
import { schema } from 'class-schema'

/**
 * Http Error %code%: %name%
 */
@schema()
export default class %short% extends HttpError {
	static CODE = %code%

	constructor(mesg: string, info?: ErrorInfo) {
		super(%short%.CODE, info?.name || '%name%', mesg, info?.key, info?.data)
	}
}
`

const errors = {
	'4xx': [
		[400, 'Bad Request'],
		[401, 'Unauthorized'],
		[402, 'Payment Required'],
		[403, 'Forbidden'],
		[404, 'Not Found'],
		[405, 'Method Not Allowed'],
		[406, 'Not Acceptable'],
		[407, 'Proxy Authentication Required'],
		[408, 'Request Timeout'],
		[409, 'Conflict'],
		[410, 'Gone'],
		[411, 'Length Required'],
		[412, 'Precondition Failed'],
		[413, 'Payload Too Large'],
		[414, 'URI Too Long'],
		[415, 'Unsupported Media Type'],
		[416, 'Range Not Satisfiable'],
		[417, 'Expectation Failed'],
		[418, 'Im a teapot'],
		[421, 'Misdirected Request'],
		[422, 'Unprocessable Entity'],
		[423, 'Locked'],
		[424, 'Failed Dependency'],
		[425, 'Too Early'],
		[426, 'Upgrade Required'],
		[428, 'Precondition Required'],
		[429, 'Too Many Requests'],
		[431, 'Request Header Fields Too Large'],
		[451, 'Unavailable For Legal Reasons'],
	],
	'5xx': [
		[500, 'Internal Server Error'],
		[501, 'Not Implemented'],
		[502, 'Bad Gateway'],
		[503, 'Service Unavailable'],
		[504, 'Gateway Timeout'],
		[505, 'HTTP Version Not Supported'],
		[506, 'Variant Also Negotiates'],
		[507, 'Insufficient Storage'],
		[508, 'Loop Detected'],
		[509, 'Bandwidth Limit Exceeded'],
		[510, 'Not Extended'],
		[511, 'Network Authentication Required'],
	],
}

for (const [stx, items] of Object.entries(errors)) {
	for (const [code, name] of items) {
		const short = name.split(' ').join('')

		fs.writeFileSync(
			`src/${stx}/${short}.ts`,
			template
				.replace(/%short%/g, short)
				.replace(/%name%/g, name)
				.replace(/%code%/g, code)
		)

		console.log(
			`export { default as ${short} } from './${stx}/${short}'`
		)
	}
}
