const orderService = require('../services/orderService');

module.exports = {
  createOrder: async (req, res, next) => {
    try {
      const { orderData, aboutOrderData } = req.body;
      const result = await orderService.createOrder(orderData, aboutOrderData);
      res.json(result);
    } catch (error) {
      next(error);
    }
  },

  updateOrderState: async (req, res, next) => {
    try {
      const { orderId } = req.params;
      const { newState } = req.body;
      const order = await orderService.updateOrderState(orderId, newState);
      res.json(order);
    } catch (error) {
      next(error);
    }
  },
};
