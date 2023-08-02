const CompanyOrder = require('../models/CompanyOrder');
const Food = require('../models/Food');

module.exports = {
  createOrder: async (orderData) => {
    return await CompanyOrder.create(orderData);
  },

  updateOrderState: async (orderId, state) => {
    return await CompanyOrder.findByIdAndUpdate(orderId, { state });
  },

  getOrderById: async (orderId) => {
    return await CompanyOrder.findById(orderId);
  },

  increaseFoodAmount: async (foodId, amount) => {
    return await Food.findByIdAndUpdate(foodId, { $inc: { amount } });
  },

  decreaseFoodAmount: async (foodId, amount) => {
    return await Food.findByIdAndUpdate(foodId, { $dec: { amount } });
  },
};
