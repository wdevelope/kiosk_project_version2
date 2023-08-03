const foodService = require('../services/s_food');

module.exports = {
  // food 생성
  createFood: async (req, res) => {
    try {
      const food = await foodService.createFood(req.body);
      res.status(201).json(food);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // food 조회
  getFoods: async (req, res) => {
    const foods = await foodService.getFoods(req.query.type);
    res.status(200).json(foods);
  },

  // food 삭제
  deleteFood: async (req, res) => {
    try {
      const result = await foodService.deleteFood(req.params.id, req.query);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // food 수정
  updateFood: async (req, res) => {
    try {
      await foodService.updateFood(req.params.id, req.body);
      res.status(200).json({ message: '상품이 수정되었습니다.' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
