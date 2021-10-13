export const BASE_URL = process.env.BASE_URL || 'http://localhost:3048/api/v1';

export const SIGNUP_ADMIN = '/signUp';
export const SIGNIN_ADMIN = '/signIn';
export const SIGNOUT_ADMIN = '/signOut';


export const ITEMS = '/items';
export const withId = (id,route) => `${route}/${id}`;
