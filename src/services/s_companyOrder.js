const companyOrderRepository = require('../repositories/companyOrderRepository');
const sequelize = require('../database/mysql');

module.exports = {
  // 발주 생성
  createCompanyOrder: async (foodId) => {
    if (!foodId) {
      throw new Error('foodId는 필수 항목입니다.');
    }
    return await companyOrderRepository.createOrder(foodId);
  },

  // 발주 상태 수정
  updateOrderState: async (id, newState) => {
    const companyOrder = await companyOrderRepository.getOrderById(id);
    const food = await companyOrderRepository.getFoodById(companyOrder.foodId);

    // 트랜잭션 처리
    await sequelize.transaction(async (transaction) => {
      switch (newState) {
        case 'PENDING':
          if (companyOrder.state === 'ORDERED') {
            await companyOrderRepository.updateState(companyOrder, 'PENDING', transaction);
          }
          break;
        case 'CANCELED':
          await companyOrderRepository.updateState(companyOrder, 'CANCELED', transaction);
          break;
        case 'COMPLETED':
          if (companyOrder.state === 'PENDING') {
            await companyOrderRepository.updateState(companyOrder, 'COMPLETED', transaction);
            await companyOrderRepository.incrementFoodAmount(food, companyOrder.amount, transaction);
          }
          break;
        case 'ORDERED':
        case 'PENDING':
          if (companyOrder.state === 'COMPLETED') {
            if (food.amount < companyOrder.amount) {
              throw new Error('현재 수량이 발주 수량보다 적어 발주 취소가 불가능합니다.');
            }
            await companyOrderRepository.updateState(companyOrder, newState, transaction);
            await companyOrderRepository.decrementFoodAmount(food, companyOrder.amount, transaction);
          }
          break;
        default:
          throw new Error('잘못된 상태 값입니다.');
      }
    });
  },
};
