const companyOrderService = require('../services/companyOrderService');

module.exports = {
  createCompanyOrder: async (req, res, next) => {
    try {
      const { foodId } = req.body;
      const order = await companyOrderService.createCompanyOrder(foodId);
      res.json(order);
    } catch (error) {
      next(error);
    }
  },

  updateOrderState: async (req, res, next) => {
    try {
      const { orderId } = req.params;
      const { newState } = req.body;
      const order = await companyOrderService.updateOrderState(orderId, newState);
      res.json(order);
    } catch (error) {
      next(error);
    }
  },
};
