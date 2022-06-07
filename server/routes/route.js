const routes = require('express').Router();
const controller =  require('../controller/controller.js');



routes.route('/api/categories')
    .get(controller.getCategories)


routes.route('/api/transaction')
    .post(controller.createTransaction)
    .get(controller.getTransaction)
    .delete(controller.deleteTransaction)

    routes.route('/api/labels')
    .get(controller.getLabel)

    
module.exports = routes;