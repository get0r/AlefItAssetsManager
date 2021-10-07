const express = require('express');
const adminRouter = require('./admin.routes');
const categoryRouter = require('./category.routes');
const itemRouter = require('./item.routes');
const employeeRouter = require('./employee.routes');

const indexRouter = express.Router();

indexRouter.use(adminRouter);
indexRouter.use(categoryRouter);
indexRouter.use(itemRouter);
indexRouter.use(employeeRouter);

module.exports = indexRouter;
