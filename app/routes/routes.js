'use strict'

var path = process.cwd();

module.exports = function(app) {

  app.get('/', function(req, res) {
      console.log('GET');
      //googleTest();
      var google = require('../api/googlecs');
      var g = new google(process.env.GOOGLE_API_CSE_ID, process.env.GOOGLE_API_KEY);
      g.searchImage('pastal', 4, function(err, body) {
        if (err) throw err;
        res.send(body);
      });
      
  });
};