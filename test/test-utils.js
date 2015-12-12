// test-utils.js
// some shared code between tests

var $ = require('cheerio');

function sample(vals) {
  return vals.map(function(v) {
    return {el: $('<div></div>'), val: v};
  });
}
module.exports.sample = sample;

function marked(el, rule) {
  return el.hasClass('marked') && el.hasClass(rule);
}
module.exports.marked = marked;

function notMarked(el, rule) {
  return !(el.hasClass('marked') || el.hasClass(rule));
}
module.exports.notMarked = notMarked;
