import alefApiCreator from './AlefApi';
import { SIGNUP_ADMIN, SIGNIN_ADMIN, SIGNOUT_ADMIN } from './constants/ApiConstants';

const adminApi = alefApiCreator({ withCredentials: true });

export const signUpAdmin = (adminDetail) => adminApi.post(SIGNUP_ADMIN, adminDetail);

export const signInAdmin = (adminDetail) => adminApi.post(SIGNIN_ADMIN, adminDetail);

export const signOutAdmin = () => adminApi.get(SIGNOUT_ADMIN);
