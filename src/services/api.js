import axios from 'axios';
import {getToken} from './auth.js';

const api = axios.create({
    baseURL: "http://127.0.0.1:5000", //TODO: THIS MIGHT CHANGE
});

api.interceptors.request.use(async (config) => {
    const token = getToken();
    
    if(token){
        config.headers.Authorization = 'Bearer ' + token;        
    }

    return config;

});

export default api;