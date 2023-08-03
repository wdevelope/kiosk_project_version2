const orderService = require('../services/s_order');

module.exports = {
  // 음식 주문 생성
  createOrder: async (req, res, next) => {
    try {
      const orderData = req.body.customer;
      const aboutOrderData = req.body.aboutOrder;
      const result = await orderService.createOrder(orderData, aboutOrderData);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },

  // 주문 완료 처리
  completeOrder: async (req, res, next) => {
    try {
      const orderId = req.params.orderId;
      const result = await orderService.completeOrder(orderId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  // 주문 취소 처리
  cancelOrder: async (req, res, next) => {
    try {
      const orderId = req.params.orderId;
      const result = await orderService.cancelOrder(orderId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};
