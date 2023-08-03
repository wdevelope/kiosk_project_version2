const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// food 생성
router.post('/food', foodController.createFood);
// food 조회
router.get('/food', foodController.getFoods);
// food 삭제
router.delete('/food/:id', foodController.deleteFood);
// food 수정
router.put('/food/:id', foodController.updateFood);

module.exports = router;
