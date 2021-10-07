const express = require('express');

const categoryRouter = express.Router();

categoryRouter
  .post('/categories', (req, res) => res.send('new category'));

categoryRouter
  .get('/categories', (req, res) => res.send('all categories'));

categoryRouter
  .get('/categories/:categoryId', (req, res) => res.send('single category'));

categoryRouter
  .delete('/categories/:categoryId', (req, res) => res.send('delete category'));

module.exports = categoryRouter;
