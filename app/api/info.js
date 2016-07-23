'use strict'

var Term = require('../models/term');

function createResponseObject(terms) {
  return terms.map(function(item) {
    var ret = {};
    ret.term = item.term;
    ret.count = item.count;
    if (item['createdAt'] !== undefined) ret.createdAt = item.createdAt;
    if (item['updatedAt'] !== undefined) ret.updatedAt = item.updatedAt;
    return ret;
  });
}

function findHandler(sort, res) {
  Term.find({}, {},
  {
    limit: 10,
    sort: sort,
  }, function(err, terms) {
    if (err) return res.send
    return res.send(createResponseObject(terms));
  });
}

module.exports = {
  updateCount: function(term, callback) {
    Term.findOneAndUpdate({
      term: term
    }, {
      $inc : { count: 1 }
    }, {
      upsert: true
    }, callback);
  },

  getTopSearches: function(req, res) {
    return findHandler({ count: -1}, res);
  },

  getLatestSearches: function(req, res) {
    return findHandler({ updatedAt: -1}, res);
  }
};