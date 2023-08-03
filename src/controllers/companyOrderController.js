const companyOrderService = require('../services/companyOrderService');

module.exports = {
  // 발주 생성
  createCompanyOrder: async (req, res, next) => {
    try {
      const { foodId } = req.body;
      const order = await companyOrderService.createCompanyOrder(foodId);
      res.json(order);
    } catch (error) {
      next(error);
    }
  },

  // 발주 상태 업데이트
  updateOrderState: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { state } = req.body;

      await companyOrderService.updateOrderState(id, state);

      res.status(200).json({ message: '발주 상태가 성공적으로 업데이트되었습니다.' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
