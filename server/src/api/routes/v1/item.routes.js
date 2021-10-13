const express = require('express');
const ItemController = require('../../controllers/item.controller');

const itemRouter = express.Router();

itemRouter
  .post('/items', ItemController.newItem);

itemRouter
  .get('/items', ItemController.getItems);

itemRouter
  .get('/items/:itemId', ItemController.getItem);

itemRouter
  .get('/itemCount', ItemController.getItemCount);

itemRouter
  .patch('/items/:itemId', ItemController.updateItem);

itemRouter
  .delete('/items/:itemId', ItemController.removeItem);

module.exports = itemRouter;
