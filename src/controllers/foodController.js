const foodService = require('../services/foodService');

module.exports = {
  createFood: async (req, res) => {
    try {
      const food = await foodService.createFood(req.body);
      res.status(201).json(food);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getFoods: async (req, res) => {
    const foods = await foodService.getFoods(req.query.type);
    res.status(200).json(foods);
  },

  deleteFood: async (req, res) => {
    try {
      await foodService.deleteFood(req.params.id);
      res.status(200).json({ message: '상품이 삭제되었습니다.' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateFood: async (req, res) => {
    try {
      await foodService.updateFood(req.params.id, req.body);
      res.status(200).json({ message: '상품이 수정되었습니다.' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
