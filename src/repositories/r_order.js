const { Customer, AboutOrder, Food } = require('../database/relations');

module.exports = {
  // 고객 주문 생성
  createCustomerOrder: async (orderData) => {
    return await Customer.create(orderData);
  },

  // 상세 주문 생성
  createAboutOrder: async (aboutOrderData) => {
    return await AboutOrder.bulkCreate(aboutOrderData);
  },

  // 주문 ID로 고객 주문 가져오기
  getCustomerOrderById: async (orderId) => {
    return await Customer.findByPk(orderId);
  },

  // 주문 상세 내역 가져오기
  getAboutOrderDetails: async (customerId) => {
    return await AboutOrder.findAll({ where: { customerId } });
  },

  // 고객 주문 상태 업데이트
  updateCustomerOrderState: async (orderId, newState, transaction) => {
    return await Customer.update({ state: newState }, { where: { id: orderId }, transaction });
  },

  // 고객 주문 삭제 (트랜잭션 적용)
  deleteCustomerOrder: async (orderId, transaction) => {
    await AboutOrder.destroy({ where: { customerId: orderId }, transaction });
    return await Customer.destroy({ where: { id: orderId }, transaction });
  },

  // 주문된 아이템 수량 감소 처리
  decreaseAmountForItems: async (items, transaction) => {
    for (const item of items) {
      await Food.decrement('amount', { by: item.amount, where: { id: item.foodId }, transaction });
    }
  },
};
