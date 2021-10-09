const catchAsync = require('../../helpers/error/catchAsyncError');

const CategoryServices = require('../../services/category.service');
const { sendErrorResponse, sendSuccessResponse } = require('../../utils/responseBuilder');
const { BAD_REQUEST, NOT_FOUND } = require('../../helpers/constants/statusCodeConstants');

/**
 * a method to try add new todo category by calling services function
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const newCategory = catchAsync(async (req, res) => {
  const category = req.body;

  const savedCategory = await CategoryServices.createCategory(category);

  if (!savedCategory) {
    return sendErrorResponse(res, BAD_REQUEST, 'category already exists');
  }

  return sendSuccessResponse(res, savedCategory);
});

/**
 * a method to get category by it's id (controller) by calling service functions
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getCategory = catchAsync(async (req, res) => {
  const category = await CategoryServices.getCategoryById(req.params.categoryId);

  if (!category) {
    return sendErrorResponse(res, NOT_FOUND, 'Category Not Found!');
  }

  return sendSuccessResponse(res, category);
});

/**
 * a method to get categories for a user by it's id (controller) by calling service functions
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getCategories = catchAsync(async (req, res) => {
  const categories = await CategoryServices.getAllCategories();

  return sendSuccessResponse(res, categories);
});

/**
 * a method to delete a category item.
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const removeCategory = catchAsync(async (req, res) => {
  const removedCat = await CategoryServices.removeCategoryById(req.params.categoryId);
  if (!removedCat) {
    return sendErrorResponse(res, NOT_FOUND, 'Couldn\'t find category');
  }
  return sendSuccessResponse(res, removedCat);
});

module.exports = {
  newCategory,
  getCategory,
  getCategories,
  removeCategory,
};
