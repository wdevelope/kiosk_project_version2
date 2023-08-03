const router = require('express').Router();
const foodRouter = require('./foodRouter');
const companyOrdersRouter = require('./companyOrderRoutes');

const defalutRouter = [
  {
    path: '/food',
    route: foodRouter,
  },
  {
    path: '/companyOrder',
    route: companyOrdersRouter,
  },
];

defalutRouter.forEach((apiRoute) => {
  router.use(apiRoute.path, apiRoute.route);
});

module.exports = router;
