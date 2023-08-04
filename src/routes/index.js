const router = require('express').Router();
const foodRouter = require('./food');
const companyOrdersRouter = require('./companyOrder');
const ordersRouter = require('./order');

const defalutRouter = [
  {
    path: '/food',
    route: foodRouter,
  },
  {
    path: '/companyOrder',
    route: companyOrdersRouter,
  },
  {
    path: '/order',
    route: ordersRouter,
  },
];

defalutRouter.forEach((apiRoute) => {
  router.use(apiRoute.path, apiRoute.route);
});

module.exports = router;
