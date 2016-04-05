'use strict';


var express = require('express');
var app = express();
var metaRouterMW = require('meta-router/middleware');
var metaRouter = metaRouterMW.match(require.resolve('./routes.json'));
app.use(metaRouter);
app.use(metaRouterMW.invokeHandler());

module.exports.spiceUP = function(parent) {
  if (parent) {
    parent.use(app);
  }
  return parent;
};

console.log(require('./lib'));
