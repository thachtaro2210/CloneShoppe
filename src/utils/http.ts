import axios , { type AxiosInstance} from "axios";
import HttpStatusCode from "../constants/httpStatusCode.enum";
//https://api-ecom.duthanhduoc.com/
import {ToastContainer,toast} from 'react-toastify'
import type { SuccessAuthResponse } from "../types/auth.type";
import { clearAccessTokenFromLS, getAccessTokenFromLS, saveAccesTokenToLS } from "./out";


class Http {
    instance : AxiosInstance
    private accessToken :string
    constructor(){
        this.accessToken = getAccessTokenFromLS()
        this.instance = axios.create({
            baseURL: 'https://api-ecom.ta.com/',
            timeout: 1000,
            headers:{
                'Content-Type':'application/json'
            }
        })
        this.instance.interceptors.request.use((config) => {
            if(this.accessToken && config.headers){
               config.headers.Authorization= this.accessToken
               return config
            }
            return config
        },(error)=> {
            return Promise.reject(error)
        })
        this.instance.interceptors.response.use(
            (response) => {
                console.log(response);
                const {url} = response.config
                if(url ==='/login' || url === '/register'){
                    this.accessToken = (response.data as SuccessAuthResponse).data.access_token
                    saveAccesTokenToLS(this.accessToken)
                }else if (url === '/logout'){
                    this.accessToken = ''
                    clearAccessTokenFromLS()
                }
                return response;
            },
            function (error){
            if(error.response?.status !== HttpStatusCode.UnprocessableEntity){
                const data:any | undefined = error.response?.data
                const message = error.response?.data?.message
                toast.error(message)
            }
            return Promise.reject(error)
            }
        )
    }
}
const http = new Http().instance
export default http