const foodRepository = require('../repositories/r_food');

module.exports = {
  // food 생성
  createFood: async (data) => {
    const { name, price, type, foodOption } = data;

    if (!name || !price || !type) {
      throw new Error('이름, 가격, 타입을 입력해주세요.');
    }
    if (!['coffee', 'juice', 'bread'].includes(type)) {
      throw new Error('타입은 coffee, juice, bread 중 하나여야 합니다.');
    }

    if (foodOption && typeof foodOption.shotPrice !== 'undefined' && foodOption.shotPrice === 0) {
      throw new Error('샷 추가 요금이 0인 경우 추가가 불가능합니다.');
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

  // food 옵션 생성
  createFoodOption: async (data) => {
    const { sizePrice, shotPrice, hotcoldPrice } = data;
    if (sizePrice === undefined || shotPrice === undefined || hotcoldPrice === undefined) {
      throw new Error('size_price, shot_price, hotcoldprice를 입력해주세요.');
    }
    const result = await foodRepository.createFoodOption({
      sizePrice,
      shotPrice,
      hotcoldPrice,
    });
    await loadFoodOptions(); // 캐시 데이터 다시 로딩
    return result;
  },

  // food 옵션 삭제
  deleteFoodOption: async (id) => {
    await foodRepository.deleteFoodOption(id);
    await loadFoodOptions(); // 캐시 데이터 다시 로딩
  },
};
