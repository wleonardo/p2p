const resourceModel = require('../model/resource.model.js')();
const parse = require('co-body');

module.exports = function*() {
  this.set("Access-Control-Allow-Origin", this.request.header.origin);
  this.set("Access-Control-Allow-Credentials", "true");
  this.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  this.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  var params = yield parse.json(this.request);
  var data = [];
  if (params.keyword) {
    var res = yield resourceModel.findAll({
      where: {
        title: {
          $like: '%'+ params.keyword +'%'
        }
      }
    });
    res.forEach(({ dataValues }) => data.push(dataValues));
    console.log(data);
  }
  this.body = {
    data: data
  }
}
