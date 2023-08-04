const express = require('express');
const app = express();

// db
const mysql = require('./database/mysql');
const relations = require('./database/relations');
const FoodOption = require('./database/models/foodOption');

// router
const router = require('./routes');

// cache
let foodOptionCache = [];

const loadFoodOptions = async () => {
  foodOptionCache = await FoodOption.findAll();
};

//sequelize를 사용해서 MYSQL 데이터베이스와 동기화
(async () => {
  await mysql.sync().then(async () => {
    await loadFoodOptions(); // 캐시 데이터 로딩
    app.use('/', router);
    app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT} 서버가 켜졌습니다 👌👌`);
    });
  });
})();
