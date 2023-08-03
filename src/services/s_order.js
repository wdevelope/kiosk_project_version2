const orderRepository = require('../repositories/r_order');
const sequelize = require('../database/mysql');

module.exports = {
  // 주문 생성
  createOrder: async (orderData, aboutOrderData) => {
    const customerOrder = await orderRepository.createCustomerOrder(orderData);
    const aboutOrders = aboutOrderData.map((item) => ({ ...item, customerId: customerOrder.id }));
    await orderRepository.createAboutOrder(aboutOrders);

    const totalPrice = aboutOrders.reduce((sum, item) => sum + item.price * item.amount, 0);

    return { orderId: customerOrder.id, totalPrice };
  },

  // 주문 완료 처리
  completeOrder: async (orderId) => {
    const order = await orderRepository.getCustomerOrderById(orderId);

    if (order.state) {
      throw new Error('주문이 이미 완료되었습니다.');
    }

    const aboutOrderDetails = await orderRepository.getAboutOrderDetails(order.id);
    const transaction = await sequelize.transaction();

    try {
      await orderRepository.updateCustomerOrderState(orderId, true, transaction);
      await orderRepository.decreaseAmountForItems(aboutOrderDetails, transaction);
      await transaction.commit();

      return { message: '주문이 성공적으로 완료되었습니다.' };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  // 주문 취소 처리
  cancelOrder: async (orderId) => {
    const order = await orderRepository.getCustomerOrderById(orderId);

    if (order.state) {
      throw new Error('완료된 주문은 취소할 수 없습니다.');
    }

    const transaction = await sequelize.transaction();

    try {
      await orderRepository.deleteCustomerOrder(orderId, transaction);
      await transaction.commit();

      return { message: '주문이 성공적으로 취소되었습니다.' };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
