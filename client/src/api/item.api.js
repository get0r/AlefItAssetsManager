import alefApiCreator from './AlefApi';

import { ITEMS } from './constants/ApiConstants';

const itemApi = alefApiCreator();

export const getAllItems = () => itemApi.get(ITEMS);