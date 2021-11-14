import alefApiCreator from './AlefApi';

import { ITEMS, ITEM_COUNT, withId, withQuery } from './constants/ApiConstants';

const itemApi = alefApiCreator();

export const getAllItems = (page) => itemApi.get(withQuery(`page`, page, ITEMS));

export const getItemCount = () => itemApi.get(ITEM_COUNT);

export const createItem = (item) => itemApi.post(ITEMS, item);

export const removeItem = (id) => itemApi.delete(withId(id, ITEMS));

export const updateItem = (id, newObj) => itemApi.patch(withId(id, ITEMS), newObj);
