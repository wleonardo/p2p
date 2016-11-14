'use strict';
//ef009d524454
const Sequelize = require('sequelize');
const db = {
  sequelize: new Sequelize('code', 'root', '', {
    timezone: '+08:00',
    define: {
      freezeTableName: true,
    },
    logging: false
  })
};
module.exports = db;