const express = require('express');
const companyOrderController = require('../controllers/companyOrderController');
const router = express.Router();

router.post('/create', companyOrderController.createCompanyOrder);
router.put('/update/:orderId', companyOrderController.updateOrderState);

module.exports = router;
