'use strict'

var path = process.cwd();
var searchControllers = require('../api/search');
var latestController = require('../api/info');
var Google = require('../api/googlecs');

module.exports = function(app) {

  app.get('/search/:term/:page', searchControllers.search); 

  app.get('/search/:term', searchControllers.searchPage1);

  app.get('/top', latestController.getTopSearches);

  app.get('/latest', latestController.getLatestSearches);

  //TODO API test page
  /*app.get('/apitest', function(req, res) {
    res.sendFile(path + '/public/index.html');
  });*/
};