'use strict'

var request = require('request');

function GoogleCS(cx, key) {
  let _endpoint = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}`;
  let _fields = 'items(image%2FcontextLink%2Clink%2Csnippet)';

  function getEndpoint(term, page) {
    return `${_endpoint}&searchType=image&q=${term}&start=${page}`
            + (_fields.length > 0 ? `&fields=${_fields}` : '');  
  }

  function createSearchObject(body) {
    return JSON.parse(body).items.map(function (item, index) {
      return { "imageLink": item.link, "pageLink": item.image.contextLink, "snippet":item.snippet};
    });
  }

  this.searchImage = function(term, page, callback) {
    request(getEndpoint(term, page), function (error, response, body) {
      if (error || response.statusCode !== 200) {
        console.log(body);
        return callback(error);
      }
      callback(null, createSearchObject(body));
    });
  };
}

module.exports = GoogleCS;