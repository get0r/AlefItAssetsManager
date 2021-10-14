import alefApiCreator from './AlefApi';

import { ITEMS, ITEM_COUNT, withId } from './constants/ApiConstants';

const itemApi = alefApiCreator();

export const getAllItems = () => itemApi.get(ITEMS);

export const getItemCount = () => itemApi.get(ITEM_COUNT);

export const createItem = (item) => itemApi.post(ITEMS, item);

export const removeItem = (id) => itemApi.delete(withId(id, ITEMS));
