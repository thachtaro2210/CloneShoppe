import type { User } from "./user.type";
import type { SuccessResponeApi,ErrorResponeApi} from "./utils.type";

export type SuccessAuthResponse = SuccessResponeApi<{
    access_token : string
    expires:string
    user: User
}>
export type ErrorAuthResponse = ErrorResponeApi<{
    access_token : string
    expires:string
    user: User
}>
