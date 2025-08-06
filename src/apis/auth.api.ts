import type { AuthResponse } from "../types/auth.type";
import http from "../utils/http";

export const RegisterAccount = (body:{email:string; password:string}) => http.post<AuthResponse>('/register',body)