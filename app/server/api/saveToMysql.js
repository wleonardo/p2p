const resourceModel = require('../model/resource.model.js')();

module.exports = function(data) {
  var param = {
    title: data.info.name.toString(),
    hash: data.infohash,
    files: Buffer.from(data.info.files),
    pieces: data.info.pieces
  };
  resourceModel.create(param);
}
