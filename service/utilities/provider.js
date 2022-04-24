import axios from 'axios';
import { handleResponse, handleError } from './response';
import config from '../../config/app-config';
const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE2NDk3OTMxNjIsImV4cCI6MTY1MjM4NTE2Mn0.sC5mTZ55uYXX-DX30Js99obhcityuPy8_HJuxw1HTDE";
const BASE_URL = config.API_BASE_URL;

const getAll = (resource, requestConfig) => {
    requestConfig = {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json',
            ...requestConfig?.headers
        },
        ...requestConfig
    };
    return axios
        .get(`${BASE_URL}/${resource}`, requestConfig)
        .then(handleResponse)
        .catch(handleError);
};


const apiProvider = {
    getAll,
};

export default apiProvider;