'use strict';
//ef009d524454
const Sequelize = require('sequelize');
const fs = require('fs');
const configPath = __dirname + '/../../../config.json';

var password = '';
if (process.env.NODE_ENV == 'prod' && fs.existsSync(configPath)) {
  const _config = fs.readFileSync(configPath ,'UTF-8');
  password = _config.mysql.password || password;
}
const db = {
  sequelize: new Sequelize('code', 'root', password, {
    timezone: '+08:00',
    define: {
      freezeTableName: true,
    },
    logging: false
  })
};
module.exports = db;
