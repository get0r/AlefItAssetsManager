const ItemModel = require('../database/models/item.model');

/**
 * a method to create a new item record in the database.
 * @param {String} param0 employee details line name..,
 * @returns savedEmployee if saving to db successful or null if not
 */
const createItem = async (itemDetails) => {
  let itemExists = false;
  if (itemDetails.serialNo) {
    itemExists = await ItemModel.findOne({ serialNo: itemDetails.serialNo }).lean();
  } else if (itemDetails.imeiNo) {
    itemExists = await ItemModel.findOne({ imeiNo: itemDetails.imeiNo }).lean();
  }

  if (itemExists) {
    return null;
  }

  const newItem = await new ItemModel({
    itemDetails,
  }).save();

  return newItem;
};

/**
 * a method to retrieve an item by its db id.
 * @param {String} itemId item id
 * @returns retrieved item- might be empty
 */
const getItemById = async (itemId) => {
  const item = await ItemModel.findById(itemId).lean();

  if (!item) {
    return null;
  }

  return item;
};

/**
 * a method to retrieve all items.
 * @returns retrieved items- might be empty
 */
const getAllItems = async () => {
  const items = await ItemModel.find().lean();
  if (!items) {
    return [];
  }
  return items;
};

/**
 * a method to delete item record from db using its id.
 * @param {String} itemId item id
 * @returns removed item- might be empty
 */
const removeItemById = async (itemId) => {
  const toBeRemoved = await getItemById(itemId);
  if (!toBeRemoved) {
    return null;
  }
  const removedItem = await ItemModel.deleteOne({ _id: itemId }).lean();
  if (!removedItem) {
    return null;
  }

  return toBeRemoved;
};

/**
 * a method to update item record i.e items in the record from db using its id.
 * @param {String} itemId employee id
 * @param {Object} updatedObject an object containing new item values to be updated
 * @returns updated employee
 */
const updateItemById = async (itemId, updatedObject) => {
  const toBeUpdated = await getItemById(itemId);
  if (!toBeUpdated) {
    return null;
  }
  const updatedItem = await ItemModel
    .updateOne({ _id: itemId }, { $set: updatedObject }).lean();
  if (!updatedItem) {
    return null;
  }
  return true;
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  removeItemById,
  updateItemById,
};
