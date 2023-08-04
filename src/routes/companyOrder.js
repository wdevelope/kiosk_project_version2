const express = require('express');
const companyOrderController = require('../controllers/c_companyOrder');
const router = express.Router();

// 발주 생성
router.post('/', companyOrderController.createCompanyOrder);
// 발주 수정
router.put('/:id', companyOrderController.updateOrderState);

module.exports = router;
