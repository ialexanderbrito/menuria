const { Router } = require('express');

const OrderController = require('./controllers/OrderController');

const routes = Router();

routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.store);
routes.patch('/orders/:id/status', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

module.exports = routes;
