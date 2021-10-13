const express = require('express');
const CategoryController = require('../../controllers/category.controller');

const categoryRouter = express.Router();

categoryRouter
  .post('/categories', CategoryController.newCategory);

categoryRouter
  .get('/categories', CategoryController.getCategories);

categoryRouter
  .get('/categories/:categoryId', CategoryController.getCategory);

categoryRouter
  .get('/categories/howMany', CategoryController.getCount);

categoryRouter
  .delete('/categories/:categoryId', CategoryController.removeCategory);

module.exports = categoryRouter;
