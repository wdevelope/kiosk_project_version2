const { Sequelize, Customer, AboutOrder, Food } = require('../mysql'); // 경로에 맞게 수정하세요

module.exports = {
  createOrder: async (orderData, aboutOrderData) => {
    const t = await sequelize.transaction();
    try {
      const order = await Customer.create(
        {
          state: false,
        },
        { transaction: t }
      );

      let totalAmount = 0;

      for (const item of aboutOrderData) {
        const food = await Food.findByPk(item.foodId, { transaction: t });
        item.price = item.option ? food.price + item.option.extraPrice : food.price;
        totalAmount += item.price;
        item.customerId = order.id;
        await AboutOrder.create(item, { transaction: t });
      }

      await t.commit();
      return { orderId: order.id, totalAmount };
    } catch (error) {
      await t.rollback();
      throw error;
    }
  },

  updateOrderState: async (orderId, newState) => {
    const t = await sequelize.transaction();
    try {
      const order = await Customer.findByPk(orderId, { transaction: t });
      if (newState === true && order.state === true) {
        throw new Error('완료된 주문은 취소할 수 없습니다.');
      }

      if (newState === true) {
        const aboutOrders = await AboutOrder.findAll({ where: { customerId: orderId }, transaction: t });
        for (const item of aboutOrders) {
          const food = await Food.findByPk(item.foodId, { transaction: t });
          food.amount -= item.amount;
          await food.save({ transaction: t });
        }
      }

      if (newState === false && order.state === true) {
        await AboutOrder.destroy({ where: { customerId: orderId }, transaction: t });
        await order.destroy({ transaction: t });
      } else {
        order.state = newState;
        await order.save({ transaction: t });
      }

      await t.commit();
      return order;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  },
};
