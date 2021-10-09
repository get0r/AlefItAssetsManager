const CategoryModel = require('../database/models/category.model');

/**
 * a method to create a new category record in the database.
 * @param {String} name category name,
 * @param {String} desc category description
 * @returns savedCategory if saving to db successful or null if not
 */
const createCategory = async (name, desc) => {
  const doesCategoryExist = await CategoryModel.findOne({ name }).lean();

  if (doesCategoryExist) {
    return null;
  }
  const newCategory = await new CategoryModel({
    name,
    desc,
  }).save();

  return newCategory;
};

/**
 * a method to retrieve a category by its id.
 * @param {String} categoryId category id
 * @returns retrieved category- might be empty
 */
const getCategoryById = async (categoryId) => {
  if (categoryId.length !== 24) return null;

  const category = await CategoryModel.findById(categoryId).lean();

  if (!category) {
    return null;
  }

  return category;
};

/**
 * a method to retrieve all categories.
 * @returns retrieved categories- might be empty
 */
const getAllCategories = async () => {
  const categories = await CategoryModel.find().lean();
  if (!categories) {
    return [];
  }
  return categories;
};

/**
 * a method to delete a category record from db using its id.
 * @param {String} categoryId category id
 * @returns removed category- might be empty
 */
const removeCategoryById = async (categoryId) => {
  const toBeRemoved = await getCategoryById(categoryId);
  if (!toBeRemoved) {
    return null;
  }
  const removedCategory = await CategoryModel.deleteOne({ _id: categoryId }).lean();
  if (!removedCategory) {
    return null;
  }

  return toBeRemoved;
};

module.exports = {
  createCategory,
  getCategoryById,
  getAllCategories,
  removeCategoryById,
};
