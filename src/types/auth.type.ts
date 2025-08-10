// import type { User } from "./user.type";
// import type { SuccessResponeApi,ErrorResponeApi} from "./utils.type";

// export type SuccessAuthResponse = SuccessResponeApi<{
//     access_token : string
//     expires:string
//     user: User
// }>
// export type ErrorAuthResponse = ErrorResponeApi<{
//     access_token : string
//     expires:string
//     user: User
// }>
import type { User } from "./user.type";
import type { SuccessResponseApi, ErrorResponseApi } from "./utils.type";

export type SuccessAuthResponse = SuccessResponseApi<{
    access_token: string;
    expires: string;
    user: User;
}>;

export type ErrorAuthResponse = ErrorResponseApi<{
    access_token?: string;
    expires?: string;
    user?: User;
    [key: string]: any;
}>;