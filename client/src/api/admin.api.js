import alefApiCreator from './AlefApi';
import { SIGNUP_ADMIN } from './constants/ApiConstants';

const adminApi = alefApiCreator();

export const signUpAdmin = (adminDetail) => adminApi.post(SIGNUP_ADMIN, adminDetail);
