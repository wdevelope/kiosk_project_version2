const foodRepository = require('../repositories/foodRepository');

module.exports = {
  createFood: async (data) => {
    const { name, price } = data;
    if (!name || !price) {
      throw new Error('이름과 가격을 입력해주세요.');
    }
    if (typeof name !== 'string' || typeof price !== 'number') {
      throw new Error('알맞은 타입을 지정해주세요.');
    }
    data.amount = 0;
    return await foodRepository.createFood(data);
  },

  getFoods: async (type) => {
    if (type) {
      return await foodRepository.getFoodsByType(type);
    }
    return await foodRepository.getAllFoods();
  },

  deleteFood: async (id) => {
    const food = await foodRepository.getFoodById(id);
    if (!food) {
      throw new Error('해당 상품을 찾을 수 없습니다.');
    }
    if (food.amount > 0) {
      throw new Error('현재 수량이 남아있습니다. 삭제하시겠습니까?');
    }
    return await foodRepository.deleteFood(id);
  },

  updateFood: async (id, data) => {
    const { name, price } = data;

    if (name && name === '') {
      throw new Error('이름을 입력해주세요.');
    }

    if (price && price < 0) {
      throw new Error('알맞은 가격을 입력해주세요.');
    }

    return await foodRepository.updateFood(id, data);
  },
};
