const catchAsync = require('../../helpers/error/catchAsyncError');

const ItemService = require('../../services/item.service');
const { sendErrorResponse, sendSuccessResponse } = require('../../utils/responseBuilder');
const { BAD_REQUEST, NOT_FOUND } = require('../../helpers/constants/statusCodeConstants');

/**
 * a method to try add new item by calling services function
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const newItem = catchAsync(async (req, res) => {
  const item = req.body;

  const savedItem = await ItemService.createItem(item);

  if (!savedItem) {
    return sendErrorResponse(res, BAD_REQUEST, 'Employee with the associated serial/imei number already exists');
  }

  return sendSuccessResponse(res, savedItem);
});

/**
 * a method to get item by it's id (controller) by calling service functions
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getItem = catchAsync(async (req, res) => {
  const item = await ItemService.getItemById(req.params.itemId);

  if (!item) {
    return sendErrorResponse(res, NOT_FOUND, 'Item Not Found!');
  }

  return sendSuccessResponse(res, item);
});

/**
 * a method to get items by it's id (controller) by calling service functions
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getItems = catchAsync(async (req, res) => {
  const items = await ItemService.getAllItems();

  return sendSuccessResponse(res, items);
});

/**
 * a method to delete item.
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const removeItem = catchAsync(async (req, res) => {
  const removedItem = await ItemService.removeItemById(req.params.itemId);
  if (!removedItem) {
    return sendErrorResponse(res, NOT_FOUND, 'Couldn\'t find Item');
  }
  return sendSuccessResponse(res, removedItem);
});

/**
   * a method to update an item.
   * and send response to the client
   * @param {Object} req request object
   * @param {Object} res response object
   */
const updateItem = catchAsync(async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return sendErrorResponse(res, BAD_REQUEST, 'Nothing to Update!');
  }
  const updatedItem = await ItemService
    .updateItemById(req.params.itemId, req.body);

  if (!updatedItem) {
    return sendErrorResponse(res, NOT_FOUND, 'Couldn\'t find item.');
  }
  return sendSuccessResponse(res, updatedItem);
});

module.exports = {
  newItem,
  getItem,
  getItems,
  removeItem,
  updateItem,
};
