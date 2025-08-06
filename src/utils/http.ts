import axios , { type AxiosInstance} from "axios";
//https://api-ecom.duthanhduoc.com/
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
    }
}
const http = new Http().instance
export default http