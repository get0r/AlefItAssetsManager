const express = require('express');

const itemRouter = express.Router();

itemRouter
  .post('/items', (req, res) => res.send('new item'));

itemRouter
  .get('/items', (req, res) => res.send('all items'));

itemRouter
  .get('/items/:itemId', (req, res) => res.send('single item'));

itemRouter
  .get('/items/:itemId', (req, res) => res.send('update item'));

itemRouter
  .delete('/items/:itemId', (req, res) => res.send('delete item'));

module.exports = itemRouter;
