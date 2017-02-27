'use strict';
const db = require('./base.js');
const Sequelize = require('sequelize');

module.exports = function() {
  return db.sequelize.define('resource', {
    title: Sequelize.STRING,
    hash: {
      type: Sequelize.STRING,
      unique: true
    },
    fileLength: {
      type: Sequelize.BIGINT,
      field: 'file_length'
    }
  }, {
    freezeTableName: true,
    underscored: true,
    timestamps: false
  });
};
