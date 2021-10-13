import alefApiCreator from './AlefApi';
import { CATEGORIES, CATEGORY_COUNT } from './constants/ApiConstants';

const categoryApi = alefApiCreator();

export const getAllCategories = () => categoryApi.get(CATEGORIES);

export const getCategoryCount = () => categoryApi.get(CATEGORY_COUNT);