const express = require('express');
const router = express.Router();
const foodController = require('../2..controllers/foodController');

router.post('/food', foodController.createFood);
router.get('/food', foodController.getFoods);
router.delete('/food/:id', foodController.deleteFood);
router.put('/food/:id', foodController.updateFood);

module.exports = router;
