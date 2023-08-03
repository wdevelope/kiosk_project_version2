const express = require('express');
const orderController = require('../controllers/c_order');
const router = express.Router();

// 주문 생성
router.post('/', orderController.createOrder);
// 주문 완료
router.put('/complete/:orderId', orderController.completeOrder);
// 주문 취소
router.delete('/cancel/:orderId', orderController.cancelOrder);

module.exports = router;
