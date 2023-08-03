const Food = require('../database/models/food');

module.exports = {
  // food 생성
  createFood: async (data) => {
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

  updateFood: async (id, data) => {
    return await Food.update(data, { where: { id } });
  },
};
