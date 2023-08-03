const foodRepository = require('../repositories/foodRepository');

module.exports = {
  // food 생성
  createFood: async (data) => {
    const { name, price, type } = data;
    if (!name || !price || !type) {
      throw new Error('이름, 가격, 타입을 입력해주세요.');
    }
    // 타입이 유효한지 확인
    if (!['coffee', 'juice', 'bread'].includes(type)) {
      throw new Error('타입은 coffee, juice, bread 중 하나여야 합니다.');
    }
    data.amount = 0;
    return await foodRepository.createFood(data);
  },

  // food 조회 (전체, 타입별로 나뉘어서 조회)
  getFoods: async (type) => {
    if (type) {
      return await foodRepository.getFoodsByType(type);
    }
    return await foodRepository.getAllFoods();
  },

  // food 삭제
  deleteFood: async (id, query) => {
    const food = await foodRepository.getFoodById(id);
    if (!food) {
      throw new Error('해당 상품을 찾을 수 없습니다.');
    }

    if (food.amount > 0 && query.confirmDelete !== 'true') {
      return { message: '현재 수량이 남아있습니다. 삭제하시겠습니까?' };
    }

    await foodRepository.deleteFood(id);
    return { message: '상품이 삭제되었습니다.' };
  },

  // food 수정
  updateFood: async (id, data) => {
    const { name, price } = data;

    if (name === '') {
      throw new Error('이름을 입력해주세요.');
    }

    if (price < 0) {
      throw new Error('알맞은 가격을 입력해주세요.');
    }

    return await foodRepository.updateFood(id, data);
  },
};
