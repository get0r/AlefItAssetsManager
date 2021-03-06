export const BASE_URL = 'https://alefitassetmanager.herokuapp.com/api/v1';

export const SIGNUP_ADMIN = '/signUp';
export const SIGNIN_ADMIN = '/signIn';
export const SIGNOUT_ADMIN = '/signOut';


export const ITEMS = '/items';
export const ITEM_COUNT = '/itemCount';

export const CATEGORIES = '/categories';
export const CATEGORY_COUNT = '/categoryCount';

export const EMPLOYEES = '/employees';
export const EMPLOYEE_COUNT = '/employeeCount';

export const withId = (id,route) => `${route}/${id}`;
export const withQuery = (key, value, route) => `${route}?${key}=${value}`;