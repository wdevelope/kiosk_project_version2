const express = require('express');
const router = express.Router();
const foodController = require('../controllers/c_food');

// food 생성
router.post('/', foodController.createFood);
// food 조회
router.get('/', foodController.getFoods);
// food 삭제
router.delete('/:id', foodController.deleteFood);
// food 수정
router.put('/:id', foodController.updateFood);
// food 옵션 추가
router.post('/:foodId/option', foodController.createFoodOption);
// food 옵션 삭제
router.delete('/:foodId/option', foodController.deleteFoodOption);

module.exports = router;
