import axios from "axios";
import config from "../config.json";
import { toast } from 'react-toastify';

axios.defaults.baseURL = config.apiUrl;

export function setCommonHeader(headerName, value) {
    axios.defaults.headers.common[headerName] = value;
}

axios.interceptors.response.use(null, (error) => {
    if (error.code === "ERR_NETWORK") {
        toast.error("network error, please check your connection");
    } else if (error.response.status >= 403) {
        toast.error("An unexpected error occourred");
    }
    return Promise.reject(error);
})

const httpService = {
    patch: axios.patch,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setCommonHeader
}

export default httpService;