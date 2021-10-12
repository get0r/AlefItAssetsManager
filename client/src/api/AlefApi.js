import axios from 'axios';
import { BASE_URL } from './constants/ApiConstants';

const alefApiCreator = params => axios.create({
    baseURL: BASE_URL,
    params: params ? params : ''
});

export default alefApiCreator;
