import type { User } from "./user.type";
import type { ResponeApi } from "./utils.type";

export type AuthResponse = ResponeApi<{
    access_token : string
    expires:string
    user: User
}>
