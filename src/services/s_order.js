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
      throw new Error('Order is already completed.');
    }
    const aboutOrderDetails = await orderRepository.getAboutOrderDetails(order.id);
    const transaction = await sequelize.transaction();
    try {
      await orderRepository.updateCustomerOrderState(orderId, true, transaction);
      await orderRepository.decreaseAmountForItems(aboutOrderDetails, transaction);
      await transaction.commit();
      return { message: 'Order completed successfully.' };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  // 주문 취소 처리
  cancelOrder: async (orderId) => {
    const order = await orderRepository.getCustomerOrderById(orderId);
    if (order.state) {
      throw new Error('Completed orders cannot be canceled.');
    }
    const transaction = await sequelize.transaction();
    try {
      await orderRepository.deleteCustomerOrder(orderId, transaction);
      await transaction.commit();
      return { message: 'Order canceled successfully.' };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
