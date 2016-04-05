'use strict';
var os = require('os');
var __IPv4 = 'IPv4';
module.exports.get = function get(options) {
  var internals = {};
  internals.host = {
    name: os.hostname(),
    ip: getLocalIpAddress(__IPv4)
  };
  internals.memory = {
    total: os.totalmem(),
    free: os.freemem()
  };

  internals.load = os.loadavg();
  internals.uptime = os.uptime();
  return internals;
};


function getLocalIpAddress(family) {
  var ipInterfaces = os.networkInterfaces();
  return ipInterfaces && ipInterfaces.en0 && ipInterfaces.en0[1];
}
