const express = require('express');
const ItemController = require('../../controllers/item.controller');

const itemRouter = express.Router();

itemRouter
  .post('/items', ItemController.newItem);

itemRouter
  .get('/items', ItemController.getItem);

itemRouter
  .get('/items/:itemId', ItemController.getItems);

itemRouter
  .patch('/items/:itemId', ItemController.updateItem);

itemRouter
  .delete('/items/:itemId', ItemController.removeItem);

module.exports = itemRouter;
