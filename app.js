const express = require('express');
app = express();

const mysql = require('./src/database/mysql');

//sequelize를 사용해서 MYSQL 데이터베이스와 동기화
(async () => {
  await mysql.sync().then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT} is running..`);
    });
  });
})();
