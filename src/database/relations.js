const AboutOrder = require('./models/aboutOrder');
const CompanyOrder = require('./models/companyOrder');
const Customer = require('./models/customer');
const Food = require('./models/food');
const FoodOption = require('./models/foodOption');

// 관계 설정

// 각 고객은 여러 개의 AboutOrder를 가질 수 있다.
Customer.hasMany(AboutOrder, { foreignKey: 'customerId', sourceKey: 'id' });
AboutOrder.belongsTo(Customer, { foreignKey: 'customerId', targetKey: 'id' });

// 각 음식은 여러 개의 AboutOrder를 가질 수 있다.
Food.hasMany(AboutOrder, { foreignKey: 'foodId', sourceKey: 'id' });
AboutOrder.belongsTo(Food, { foreignKey: 'foodId', targetKey: 'id' });

// 각 음식은 여러 개의 CompanyOrder를 가질 수 있다.
Food.hasMany(CompanyOrder, { foreignKey: 'foodId', sourceKey: 'id' });
CompanyOrder.belongsTo(Food, { foreignKey: 'foodId', targetKey: 'id' });

// 각 음식은 여러 개의 FoodOption을 가질 수 있다.
Food.hasMany(FoodOption, { foreignKey: 'foodId', sourceKey: 'id' });
FoodOption.belongsTo(Food, { foreignKey: 'foodId', targetKey: 'id' });

module.exports = {
  AboutOrder,
  CompanyOrder,
  Customer,
  Food,
  FoodOption,
};
