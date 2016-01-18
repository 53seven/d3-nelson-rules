// rule_2-test.js
var tape = require('tape-catch'),
    _ = require('lodash'),
    utils = require('./test-utils'),
    rule_2 = require('../').nelson().rule_2;

var std = 1,
    mean = 0;

var input_pos_match = utils.sample(_.range(1, 10));
var input_neg_match = utils.sample(_.range(-1, -10, -1));
var input_no_match = utils.sample(_.range(-4, 5));

tape('rule_2 matches on the positive side of the mean', function(test) {
  var result = rule_2(input_pos_match, mean, std);
  result.forEach(function(res, i) {
    test.ok(utils.marked(res, 'rule_2'), 'el ' + i + ' is marked');
  });
  test.end();
});

tape('rule_2 matches on the negative side of the mean', function(test) {
  var result = rule_2(input_neg_match, mean, std);
  result.forEach(function(res) {
    test.ok(utils.marked(res, 'rule_2'));
  });
  test.end();
});

tape('rule_2 does not match if a sequence crosses the mean', function(test) {
  var result = rule_2(input_no_match, mean, std);
  result.forEach(function(res) {
    test.ok(utils.notMarked(res, 'rule_2'));
  });
  test.end();
});
