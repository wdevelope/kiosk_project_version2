const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.post('/', orderController.createOrder);
router.put('/complete/:orderId', orderController.completeOrder);
router.delete('/cancel/:orderId', orderController.cancelOrder);

module.exports = router;
