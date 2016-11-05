'use strict';

var http = require('https');

module.exports = function(app) {
  http.get("https://google.com", function(req, res) {
    console.log('amandine', res);
  })
};
