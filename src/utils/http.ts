import axios , { type AxiosInstance} from "axios";
import HttpStatusCode from "../constants/httpStatusCode.enum";
//https://api-ecom.duthanhduoc.com/
import {ToastContainer,toast} from 'react-toastify'
class Http {
    instance : AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://api-ecom.ta.com/',
            timeout:1000,
            headers:{
                'Content-Type':'application/json'
            }
        })
        this.instance.interceptors.response.use(
            function(response){
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