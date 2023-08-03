const { Customer, AboutOrder, Food } = require('../models');

module.exports = {
  createCustomerOrder: async (orderData) => {
    return await Customer.create(orderData);
  },
  createAboutOrder: async (aboutOrderData) => {
    return await AboutOrder.bulkCreate(aboutOrderData);
  },
  getCustomerOrderById: async (orderId) => {
    return await Customer.findByPk(orderId);
  },
  getAboutOrderDetails: async (customerId) => {
    return await AboutOrder.findAll({ where: { customerId } });
  },
  updateCustomerOrderState: async (orderId, newState, transaction) => {
    return await Customer.update({ state: newState }, { where: { id: orderId }, transaction });
  },
  deleteCustomerOrder: async (orderId, transaction) => {
    await AboutOrder.destroy({ where: { customerId: orderId }, transaction });
    return await Customer.destroy({ where: { id: orderId }, transaction });
  },
  decreaseAmountForItems: async (items, transaction) => {
    for (const item of items) {
      await Food.decrement('amount', { by: item.amount, where: { id: item.foodId }, transaction });
    }
  },
};
