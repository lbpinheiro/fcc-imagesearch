'use strict'

const request = require('request');

function GoogleCS(cx, key) {
  let _endpoint = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}`;
  let _fields = 'items(image%2FcontextLink%2Clink%2Csnippet)';

  function getEndpoint(term, page) {
    return `${_endpoint}&searchType=image&q=${term}&start=${page}`
            + (_fields.length > 0 ? `&fields=${_fields}` : '');  
  }

  function getCustomObject(body) {
    return JSON.parse(body).items.map(function (item, index) {
      return { "imageLink": item.link, "pageLink": item.image.contextLink, "snippet":item.snippet};
    });
  }

  this.searchImage = function(term, page, callback) {
    //TODO validate page number
    request(getEndpoint(term, page), function (error, response, body) {
      if (error || response.statusCode !== 200) {
        console.log(body);
        return callback(error);
      }
      callback(null, getCustomObject(body));
    });
  };

  this.setFilds = function(fields) {
    _fields = fields;
  };
}

module.exports = GoogleCS;