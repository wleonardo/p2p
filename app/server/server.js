var koa = require('koa');
var app = koa();
var router = require('koa-router')();

var P2PSpider = require('p2p-spider');
var saveToMysql = require('./api/saveToMysql.js');

var p2p = P2PSpider({
  nodesMaxSize: 200, // be careful
  maxConnections: 400, // be careful
  timeout: 5000
});

p2p.ignore(function(infohash, rinfo, callback) {
  // false => always to download the metadata even though the metadata is exists.
  var theInfohashIsExistsInDatabase = false;
  callback(theInfohashIsExistsInDatabase);
});

p2p.on('metadata', function(metadata) {
  console.log(metadata);
  saveToMysql(metadata);
});

p2p.listen(6881, '0.0.0.0');
router.post('/getData', require('./api/get-data.api.js'));
app
  .use(router.routes())
	.use(router.allowedMethods());
app.listen(3000);
console.log(3000);
