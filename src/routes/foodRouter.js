const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// food 생성
router.post('/', foodController.createFood);
// food 조회
router.get('/', foodController.getFoods);
// food 삭제
router.delete('/:id', foodController.deleteFood);
// food 수정
router.put('/:id', foodController.updateFood);

module.exports = router;
