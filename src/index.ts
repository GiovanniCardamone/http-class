import 'reflect-metadata'

import { default as HttpError, GenericHttpError } from './HttpError'

// 4xx
import { default as BadRequest } from './4xx/BadRequest'
import { default as Unauthorized } from './4xx/Unauthorized'
import { default as PaymentRequired } from './4xx/PaymentRequired'
import { default as Forbidden } from './4xx/Forbidden'
import { default as NotFound } from './4xx/NotFound'
import { default as MethodNotAllowed } from './4xx/MethodNotAllowed'
import { default as NotAcceptable } from './4xx/NotAcceptable'
import { default as ProxyAuthenticationRequired } from './4xx/ProxyAuthenticationRequired'
import { default as RequestTimeout } from './4xx/RequestTimeout'
import { default as Conflict } from './4xx/Conflict'
import { default as Gone } from './4xx/Gone'
import { default as LengthRequired } from './4xx/LengthRequired'
import { default as PreconditionFailed } from './4xx/PreconditionFailed'
import { default as PayloadTooLarge } from './4xx/PayloadTooLarge'
import { default as URITooLong } from './4xx/URITooLong'
import { default as UnsupportedMediaType } from './4xx/UnsupportedMediaType'
import { default as RangeNotSatisfiable } from './4xx/RangeNotSatisfiable'
import { default as ExpectationFailed } from './4xx/ExpectationFailed'
import { default as Imateapot } from './4xx/Imateapot'
import { default as MisdirectedRequest } from './4xx/MisdirectedRequest'
import { default as UnprocessableEntity } from './4xx/UnprocessableEntity'
import { default as Locked } from './4xx/Locked'
import { default as FailedDependency } from './4xx/FailedDependency'
import { default as TooEarly } from './4xx/TooEarly'
import { default as UpgradeRequired } from './4xx/UpgradeRequired'
import { default as PreconditionRequired } from './4xx/PreconditionRequired'
import { default as TooManyRequests } from './4xx/TooManyRequests'
import { default as RequestHeaderFieldsTooLarge } from './4xx/RequestHeaderFieldsTooLarge'
import { default as UnavailableForLegalReasons } from './4xx/UnavailableForLegalReasons'

// 5xx
import { default as InternalServerError } from './5xx/InternalServerError'
import { default as NotImplemented } from './5xx/NotImplemented'
import { default as BadGateway } from './5xx/BadGateway'
import { default as ServiceUnavailable } from './5xx/ServiceUnavailable'
import { default as GatewayTimeout } from './5xx/GatewayTimeout'
import { default as HTTPVersionNotSupported } from './5xx/HTTPVersionNotSupported'
import { default as VariantAlsoNegotiates } from './5xx/VariantAlsoNegotiates'
import { default as InsufficientStorage } from './5xx/InsufficientStorage'
import { default as LoopDetected } from './5xx/LoopDetected'
import { default as BandwidthLimitExceeded } from './5xx/BandwidthLimitExceeded'
import { default as NotExtended } from './5xx/NotExtended'
import { default as NetworkAuthenticationRequired } from './5xx/NetworkAuthenticationRequired'

export const errors = [
	//4xx
	BadRequest,
	Unauthorized,
	PaymentRequired,
	Forbidden,
	NotFound,
	MethodNotAllowed,
	NotAcceptable,
	ProxyAuthenticationRequired,
	RequestTimeout,
	Conflict,
	Gone,
	LengthRequired,
	PreconditionFailed,
	PayloadTooLarge,
	URITooLong,
	UnsupportedMediaType,
	RangeNotSatisfiable,
	ExpectationFailed,
	Imateapot,
	MisdirectedRequest,
	UnprocessableEntity,
	Locked,
	FailedDependency,
	TooEarly,
	UpgradeRequired,
	PreconditionRequired,
	TooManyRequests,
	RequestHeaderFieldsTooLarge,
	UnavailableForLegalReasons,

	// 5xx
	InternalServerError,
	NotImplemented,
	BadGateway,
	ServiceUnavailable,
	GatewayTimeout,
	HTTPVersionNotSupported,
	VariantAlsoNegotiates,
	InsufficientStorage,
	LoopDetected,
	BandwidthLimitExceeded,
	NotExtended,
	NetworkAuthenticationRequired,
]

export {
	HttpError, GenericHttpError,

	// 4xx
	BadRequest,
	Unauthorized,
	PaymentRequired,
	Forbidden,
	NotFound,
	MethodNotAllowed,
	NotAcceptable,
	ProxyAuthenticationRequired,
	RequestTimeout,
	Conflict,
	Gone,
	LengthRequired,
	PreconditionFailed,
	PayloadTooLarge,
	URITooLong,
	UnsupportedMediaType,
	RangeNotSatisfiable,
	ExpectationFailed,
	Imateapot,
	MisdirectedRequest,
	UnprocessableEntity,
	Locked,
	FailedDependency,
	TooEarly,
	UpgradeRequired,
	PreconditionRequired,
	TooManyRequests,
	RequestHeaderFieldsTooLarge,
	UnavailableForLegalReasons,

	// 5xx
	InternalServerError,
	NotImplemented,
	BadGateway,
	ServiceUnavailable,
	GatewayTimeout,
	HTTPVersionNotSupported,
	VariantAlsoNegotiates,
	InsufficientStorage,
	LoopDetected,
	BandwidthLimitExceeded,
	NotExtended,
	NetworkAuthenticationRequired,
}

export function codeToName(code: number): string {
	switch (code) {
	case 400: return 'Bad Request'
	case 401: return 'Unauthorized'
	case 402: return 'Payment Required'
	case 403: return 'Forbidden'
	case 404: return 'Not Found'
	case 405: return 'Method Not Allowed'
	case 406: return 'Not Acceptable'
	case 407: return 'Proxy Authentication Required'
	case 408: return 'Request Timeout'
	case 409: return 'Conflict'
	case 410: return 'Gone'
	case 411: return 'Length Required'
	case 412: return 'Precondition Failed'
	case 413: return 'Payload Too Large'
	case 414: return 'URI Too Long'
	case 415: return 'Unsupported Media Type'
	case 416: return 'Range Not Satisfiable'
	case 417: return 'Expectation Failed'
	case 418: return 'Im a teapot'
	case 421: return 'Misdirected Request'
	case 422: return 'Unprocessable Entity'
	case 423: return 'Locked'
	case 424: return 'Failed Dependency'
	case 425: return 'Too Early'
	case 426: return 'Upgrade Required'
	case 428: return 'Precondition Required'
	case 429: return 'Too Many Requests'
	case 431: return 'Request Header Fields Too Large'
	case 451: return 'Unavailable For Legal Reasons'
	case 500: return 'Internal Server Error'
	case 501: return 'Not Implemented'
	case 502: return 'Bad Gateway'
	case 503: return 'Service Unavailable'
	case 504: return 'Gateway Timeout'
	case 505: return 'HTTP Version Not Supported'
	case 506: return 'Variant Also Negotiates'
	case 507: return 'Insufficient Storage'
	case 508: return 'Loop Detected'
	case 509: return 'Bandwidth Limit Exceeded'
	case 510: return 'Not Extended'
	case 511: return 'Network Authentication Required'
	default: return `Unknonwn(${code})`
	}
}
