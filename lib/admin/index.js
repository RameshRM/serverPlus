'use strict';
var internals = require('../internals');
module.exports = function admin(req, res) {
  res.status(200).send(internals.get());
};
