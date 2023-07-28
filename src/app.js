const express = require('express');
const app = express();
const relations = require('./database/relations');
const mysql = require('./database/mysql');

//sequelize를 사용해서 MYSQL 데이터베이스와 동기화
(async () => {
  await mysql.sync().then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT} 서버가 켜졌습니다 👌👌`);
    });
  });
})();
