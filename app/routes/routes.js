'use strict'

var path = process.cwd();
var searchControllers = require('../api/search');
var info = require('../api/info');
var Google = require('../api/googlecs');

module.exports = function(app) {

  app.get('/search/:term/:page', searchControllers.search); 

  app.get('/search/:term', searchControllers.searchPage1);

  app.get('/top', info.getTopSearches);

  app.get('/latest', info.getLatestSearches);

  //TODO API test page
  /*app.get('/apitest', function(req, res) {
    res.sendFile(path + '/public/index.html');
  });*/
};