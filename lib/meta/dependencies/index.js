'use strict';
var fs = require('fs');
module.exports = function(req, res) {
  res.status(200).send(process.cwd());
};
