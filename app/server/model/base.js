'use strict';
//ef009d524454
const Sequelize = require('sequelize');
var passWord = '';
if (process.env.NODE_ENV == 'prod') {
  passWord = '104ef09afb';
}
const db = {
  sequelize: new Sequelize('code', 'root', passWord, {
    timezone: '+08:00',
    define: {
      freezeTableName: true,
    },
    logging: false
  })
};
module.exports = db;
