// test-utils.js
// some shared code between tests

var $ = require('cheerio');

function sample(vals) {
  return vals.map(function(v) {
    return {el: $('<div></div>'), val: v};
  });
}
module.exports.sample = sample;

function marked(data, rule) {
  // in the testing environemnt the keys are strings for some reason (cheerio vs d3 differences).
  return data.el.attr('marked') === 'true' && data.el.attr(rule) === 'true';
}
module.exports.marked = marked;

function notMarked(data, rule) {
  return data.el.attr('marked') !== 'true' && data.el.attr(rule) !== 'true';
}
module.exports.notMarked = notMarked;
