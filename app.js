'use strict';

var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var http = require ('http');
//
//
// app.use(cors());
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var corsOptions = {
  origin: 'http://soundcloud.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/purple', cors(corsOptions), function(req, res, next){
  res.json({msg: 'This is CORS-enabled for only example.com.'});
});

app.listen(8000, function(){
  console.log('CORS-enabled web server listening on port 80');
});
