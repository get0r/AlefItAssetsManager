import axios from 'axios';
import { BASE_URL } from './constants/ApiConstants';

const alefApiCreator = (config, params) => axios.create({
    baseURL: BASE_URL,
    ...config,
    params: params ? params : '',
});

export default alefApiCreator;
