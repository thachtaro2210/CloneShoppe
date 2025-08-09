import type { SuccessAuthResponse } from "../types/auth.type";
import http from "../utils/http";

export const RegisterAccount = (body:{email:string; password:string}) => http.post<SuccessAuthResponse>('/register',body)


export const LoginAccount = (body:{email:string; password:string}) => http.post<SuccessAuthResponse>('/login',body)

export const logout = () => http.post('/logout')