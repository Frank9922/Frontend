import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    withCredentials : true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    
})

api.defaults.withCredentials = true


api.interceptors.request.use(

  async(config) => {

    if(config.method.toLowerCase() !== 'get'){

        await axios.get(import.meta.env.VITE_URL_API + '/csrf-cookie', { withCredentials: true})
        
        config.headers['X-XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN')
       
    }

    return config
  })