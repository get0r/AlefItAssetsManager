import axios from 'axios';
import { BASE_URL, SIGNUP_ADMIN, SIGNIN_ADMIN } from './constants/ApiConstants';

const alefApi = axios.create({
    baseURL: BASE_URL
});

export const signUpAdmin = (fname, lname, username, password) => alefApi.post(SIGNUP_ADMIN, { fname, lname, username, password });

export const signInAdmin = (username, password) => alefApi.post(SIGNIN_ADMIN, { username, password });
