import alefApiCreator from './AlefApi';
import { CATEGORIES, CATEGORY_COUNT, withId } from './constants/ApiConstants';

const categoryApi = alefApiCreator();

export const getAllCategories = () => categoryApi.get(CATEGORIES);

export const getCategoryCount = () => categoryApi.get(CATEGORY_COUNT);

export const createCategory = (category) => categoryApi.post(CATEGORIES, category);

export const removeCategory = (catId) => categoryApi.delete(withId(catId, CATEGORIES));
