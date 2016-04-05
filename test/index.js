'use strict';
var request = require('supertest');
var assert = require('assert');
var express = require('express')();
var server;


describe(__filename + 'start server', function () {
  before(function (done) {
    server = express;
    server.get('/user', function (req, res) {
      res.status(200).json({
        name: 'John Doe'
      });
    });

    setTimeout(function () {
      done();
    }, 200); //Kraken has a delay

  });

  it(__filename + 'should get user over non-secured', function (done) {
    request(server)
      .get('/user')
      .end(function (err, res) {
        assert.ok(!err);
        assert.ok(res.body.name === 'John Doe');
        done();
      });
  });

});
