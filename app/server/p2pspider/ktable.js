'use strict';

var utils = require('./utils');

var KTable = function(maxsize) {
  this.nid = utils.randomID();
  this.nodes = [];
  this.maxsize = maxsize;
};

KTable.prototype.push = function(node) {
  if (this.nodes.length >= 10000) {
      return;
  }
  this.nodes.push(node);
};

module.exports = KTable;
