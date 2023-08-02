const { Sequelize, CompanyOrder, Food } = require('../mysql'); // 경로에 맞게 수정하세요

module.exports = {
  createCompanyOrder: async (foodId) => {
    const order = await CompanyOrder.create({
      foodId: foodId,
      state: 0, // default state
    });
    return order;
  },

  updateOrderState: async (orderId, newState) => {
    const t = await sequelize.transaction();

    try {
      const order = await CompanyOrder.findByPk(orderId, { transaction: t });
      const food = await Food.findByPk(order.foodId, { transaction: t });

      await t.commit();
      return order;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  },
};
