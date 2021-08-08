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
