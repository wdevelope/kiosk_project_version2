const router = require('express').Router();
const foodRouter = require('./foodRouter');
const companyOrdersRouter = require('./companyOrderRoutes');
const ordersRouter = require('./orderRoutes');

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
    path: '/orders',
    route: ordersRouter,
  },
];

defalutRouter.forEach((apiRoute) => {
  router.use(apiRoute.path, apiRoute.route);
});

module.exports = router;
