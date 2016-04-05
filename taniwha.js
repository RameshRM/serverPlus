'use strict';
var net = require('net');
var socket = new net.Socket({
  writable: true
});
console.log(socket.connect);
var address;

var server = net.createServer(function (socket) {
  // socket.write('Echo s erver\r\n');
  socket.pipe(socket);
});
socket.setNoDelay(true);
server.on('data', function (data) {
  console.log('Server Data', data.toString());

});

// grab a random port.
server.listen(function () {
  address = server.address();
  console.log("opened server on %j", address);
});
setTimeout(function () {
  // var net = require('net');

  var client = new net.Socket();
  client.connect(2878, '10.255.255.254', function () {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
  });

  client.on('data', function (data) {
    console.log('Received: ' + data);
    client.destroy(); // kill client after server's response
  });

  client.on('close', function () {
    console.log('Connection closed');
  });
  // socket.connect(address.port, address.address, function listener(listen) {
  //   socket.write('Hello World', 'utf-8', function write(_write, args) {
  //       console.log('_write',args);
  //   });
  //
  // });
  //
  // var result = socket.on('drain', function drain(data) {
  //   console.log('Drain', data);
  // });
  // socket.on('end', function end() {
  //   console.log('ErrEnd');
  // });
  // socket.on('error', function () {
  //   console.log('Err');
  // });
  //
  // socket.on('data', function (data) {
  //   console.log('Data', data.toString());
  // });
  // console.log(socket.bytesWritten);
  // var __HOST = 'ec2-52-37-222-124.us-west-2.compute.amazonaws.com';
  //

}, 500);
module.exports.taniwha = function () {

}
