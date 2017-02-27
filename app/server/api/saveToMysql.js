const resourceModel = require('../model/resource.model.js')();

function isSingleFile(data) {
  return data.info.files ? false : true;
}
module.exports = function(data) {
  try {
    var btInfo = {
      title: data.info.name.toString('utf-8'),
      hash: data.infohash
    }
    if (isSingleFile(data)) {
      btInfo.fileLength = data.info.length;
    } else {
      let fileLength = 0;
      data.info.files.forEach(function(file) {
        fileLength += file.length;
      })
      btInfo.fileLength = fileLength;
    }
    resourceModel.create(btInfo);
  } catch (e) {}
}
