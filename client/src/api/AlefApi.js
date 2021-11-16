import axios from 'axios';
import { BASE_URL } from './constants/ApiConstants';

const alefApiCreator = (config, params) => axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    },
    ...config,
    params: params ? params : '',
});

export default alefApiCreator;
