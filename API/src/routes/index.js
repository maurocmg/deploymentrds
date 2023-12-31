const express = require("express");
const routerBook = require("./routerBook");
const routerCategory = require('./routerCategory');
const routerLanguage = require("./routerLanguage");
const routerAuthor = require("./routerAuthor");
const routerBulkCreate = require ('./routerBulkCreate')
const logoutRouter = require('./routerLogout');
const routerMercadoPago = require('./routerMercadoPago');

const bulkCreateBooksHandler = require('../handlers/BulkCreateBooksHandler');

const rootRouter = express.Router();
//Routes and middlewares
rootRouter.use("/books", routerBook);
rootRouter.use('/category', routerCategory);
rootRouter.use('/language', routerLanguage);
rootRouter.use('/authors', routerAuthor);
rootRouter.use('/bulkcreate', routerBulkCreate);
rootRouter.use('/logout', logoutRouter);
rootRouter.use('/', routerMercadoPago);


module.exports = rootRouter;
