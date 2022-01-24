import axios from "axios";
import { variables } from '$lib/variables';

const axiosAPI = axios.create({
    baseURL : variables.basePath
})

const apiRequest = (method, url, request) => {
    const headers = {
        authorization: ""
    };
    return axiosAPI({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return Promise.resolve(res.data);
    })
    .catch(err => {
        return Promise.reject(err);
    });
};

const get = (url, request) => apiRequest("get", url, request);

const API = {
    get
};

export default API;