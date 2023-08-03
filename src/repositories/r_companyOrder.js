const CompanyOrder = require('../database/models/companyOrder');
const Food = require('../database/models/Food');

module.exports = {
  createOrder: async (foodId) => {
    return await CompanyOrder.create({ foodId, state: 'ORDERED' });
  },

  getOrderById: async (id) => {
    return await CompanyOrder.findByPk(id);
  },

  updateState: async (order, state, transaction) => {
    return await order.update({ state }, { transaction });
  },

  getFoodById: async (foodId) => {
    return await Food.findByPk(foodId);
  },

  incrementFoodAmount: async (food, amount, transaction) => {
    return await food.increment('amount', { by: amount, transaction });
  },

  decrementFoodAmount: async (food, amount, transaction) => {
    return await food.decrement('amount', { by: amount, transaction });
  },
};
