// rule_8-test.js
var tape = require('tape-catch'),
    utils = require('./test-utils'),
    rule_8 = require('../').nelson().rule_8;

var std = 1,
    mean = 0;

var input_pos_match = utils.sample([2, 4, 2, -4, 6, -10, 7, 2]);
var input_no_match = utils.sample([2, 0, 2, -4, 6, 0, 7, 2]);

tape('rule_8 marks high values', function(test) {
  var result = rule_8(input_pos_match, mean, std);
  result.forEach(function(res, i) {
    test.ok(utils.marked(res.el, 'rule_8'), 'el ' + i + ' is marked');
  });
  test.end();
});

tape('rule_8 does not mark low values', function(test) {
  var result = rule_8(input_no_match, mean, std);
  result.forEach(function(res, i) {
    test.ok(utils.notMarked(res.el, 'rule_8'), 'el ' + i + ' is not marked');
  });

  test.end();
});
