
var Google = require('./googlecs');
var info = require('./info');
var commom = require('./commom');

function googleSearch(term, page, res) {
  info.updateCount(term, function(err) {
    if (err) {
      return res.send(commom.createErrObject(err));
    }
  });

  var g = new Google(process.env.GOOGLE_API_CSE_ID, process.env.GOOGLE_API_KEY);
  g.searchImage(term, page, function(err, body) {
    if (err) throw err;
    res.send(body);
  });
}

module.exports = {
  search: function (req, res) {
    if (!req || !req.params || !req.params.term || !req.params.page) {
      return res.send(commom.createErrObject('invalid request'));
    }

    if (!/^[1-9]+$/.test(req.params.page)) {
      return res.send(commom.createErrObject('invalid page number'));
    }

    googleSearch(encodeURIComponent(req.params.term), req.params.page, res);
  },

  searchPage1: function (req, res) {
    if (!req || !req.params || !req.params.term) {
      return res.send(commom.createErrObject('invalid request'));
    }

    googleSearch(encodeURIComponent(req.params.term), 1, res);
  }
};