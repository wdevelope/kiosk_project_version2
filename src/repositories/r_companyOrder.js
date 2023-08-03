const CompanyOrder = require('../database/models/companyOrder');
const Food = require('../database/models/Food');

module.exports = {
  // 발주 주문
  createOrder: async (foodId) => {
    return await CompanyOrder.create({ foodId, state: 'ORDERED' });
  },

  // 발주 주문 id
  getOrderById: async (id) => {
    return await CompanyOrder.findByPk(id);
  },

  // 발주 상태 수정
  updateState: async (order, state, transaction) => {
    return await order.update({ state }, { transaction });
  },

  // 발주 음식 id
  getFoodById: async (foodId) => {
    return await Food.findByPk(foodId);
  },

  // 음식 수량 증가
  incrementFoodAmount: async (food, amount, transaction) => {
    return await food.increment('amount', { by: amount, transaction });
  },

  // 음식 수량 감소
  decrementFoodAmount: async (food, amount, transaction) => {
    return await food.decrement('amount', { by: amount, transaction });
  },
};
