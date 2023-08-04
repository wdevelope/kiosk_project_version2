const Food = require('../database/models/food');
const FoodOption = require('../database/models/foodOption');

module.exports = {
  // food 생성
  createFood: async (data) => {
    const foodOptionData = data.foodOption;
    delete data.foodOption; // 옵션 데이터 삭제하여 food 데이터만 남김

    const foodOption = await FoodOption.create(foodOptionData);
    data.foodOptionId = foodOption.id; // 생성된 옵션 ID를 food 데이터에 추가

    return await Food.create(data);
  },

  // food 전체조회
  getAllFoods: async () => {
    return await Food.findAll();
  },

  // food 타입별 조회
  getFoodsByType: async (type) => {
    return await Food.findAll({ where: { type } });
  },

  // food 전체 조회
  getFoodById: async (id) => {
    return await Food.findOne({ where: { id } });
  },

  // food 삭제
  deleteFood: async (id) => {
    return await Food.destroy({ where: { id } });
  },

  // food 수정
  updateFood: async (id, data) => {
    return await Food.update(data, { where: { id } });
  },

  // food 옵션 생성
  createFoodOption: async (data) => {
    return await FoodOption.create(data);
  },

  // food 옵션 삭제
  deleteFoodOption: async (id) => {
    return await FoodOption.destroy({
      where: { id: id },
    });
  },
};
