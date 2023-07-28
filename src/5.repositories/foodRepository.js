const Food = require('../database/models/food');

module.exports = {
  createFood: async (data) => {
    return await Food.create(data);
  },

  getAllFoods: async () => {
    return await Food.findAll();
  },

  getFoodsByType: async (type) => {
    return await Food.findAll({ where: { type } });
  },

  getFoodById: async (id) => {
    return await Food.findOne({ where: { id } });
  },

  deleteFood: async (id) => {
    return await Food.destroy({ where: { id } });
  },

  updateFood: async (id, data) => {
    return await Food.update(data, { where: { id } });
  },
};
