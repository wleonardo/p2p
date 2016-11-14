var dgram = require('dgram');
var udp = dgram.createSocket('udp4');
var bencode = require('bencode');
var KTable = require('./p2pspider/ktable.js');
var utils = require('./p2pspider/utils.js');
var BOOTSTRAP_NODES = [
  ['router.bittorrent.com', 6881],
  ['dht.transmissionbt.com', 6881]
];

var joinDHTNetwork = function() {
  BOOTSTRAP_NODES.forEach(function(node) {
    sendFindNodeRequest({ address: node[0], port: node[1] });
  }.bind(this));
};
var pingNode = function(_nid, rinfo) {
  var msg = {
    t: 'aa' || utils.randomID().slice(0, 4),
    y: 'q',
    q: 'ping',
    a: {
      id: 'abcdefghij0123456789' || _nid
    }
  };
  console.log(msg);
  try {
    var buf = bencode.encode(msg);
  } catch (err) {
    console.log(err);
    return;
  }
  udp.send(buf, 0, buf.length, rinfo.port, rinfo.address);
}
var sendFindNodeRequest = function(rinfo, nid) {
  var _nid = nid != undefined ? utils.genNeighborID(nid, ktable.nid) : ktable.nid;
  var msg = {
    t: utils.randomID().slice(0, 4),
    y: 'q',
    q: 'find_node',
    a: {
      id: _nid,
      target: utils.randomID()
    }
  };
  console.log(msg);
  sendKRPC(msg, rinfo);
};
var sendKRPC = function(msg, rinfo) {
  try {
    var buf = bencode.encode(msg);
  } catch (err) {
    console.log(err);
    return;
  }
  udp.send(buf, 0, buf.length, rinfo.port, rinfo.address);
  console.log('send ok');
};

var makeNeighbours = function() {
  console.log('makeNeighbours');
  console.log(ktable.nodes);
  ktable.nodes.forEach(function(node) {
    console.log(node);
    sendFindNodeRequest({
      address: node.address,
      port: node.port
    }, node.nid);
  }.bind(this));
  ktable.nodes = [];
};

var onMessage = function(msg, rinfo) {
  try {
    var msg = bencode.decode(msg);
    console.log(msg.toString());
    if (msg.y == 'r' && msg.r.nodes) {
    	console.log(msg.r.nodes.toString());
      onFindNodeResponse(msg.r.nodes);
    } else if (msg.y == 'q' && msg.q == 'get_peers') {
      //this.onGetPeersRequest(msg, rinfo);
    } else if (msg.y == 'q' && msg.q == 'announce_peer') {
      //this.onAnnouncePeerRequest(msg, rinfo);
    }
  } catch (err) {
    console.log(err);
  }
};

var onFindNodeResponse = function(nodes) {
  var nodes = utils.decodeNodes(nodes);
  nodes.forEach(function(node) {
  	console.log(node);
    if (node.address != option.address && node.nid != ktable.nid && node.port < 65536 && node.port > 0) {
      ktable.push(node);
    }
  }.bind(this));
};

var option = {
  address: '0.0.0.0',
  port: 6881
};
var ktable = new KTable(10);
console.log(ktable);
udp.bind(option.port, option.address);
udp.on('listening', function() {
  console.log('UDP Server listening on %s:%s', option.address, option.port);
}.bind(this));
udp.on('message', function(msg, rinfo) {
  console.log('get mesage--->');
  console.log(msg);
  onMessage(msg, rinfo);
}.bind(this));
console.log("this");
// setInterval(function() {
  joinDHTNetwork();
  makeNeighbours();
// }, 5000);
