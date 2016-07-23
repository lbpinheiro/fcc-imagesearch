'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Term = new Schema({
  term: String,
  count: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Term', Term);