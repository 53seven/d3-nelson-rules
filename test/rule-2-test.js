// rule_2-test.js
var tape = require('tape-catch'),
    _ = require('lodash'),
    rule_2 = require('../').nelson().rule_2;

var std = 1,
    mean = 0;

var input_pos_match = _.range(1, 10);
var input_neg_match = _.range(-1, -10, -1);
var input_no_match = _.range(-4, 5);

tape('rule_2 matches on the positive side of the mean', function(test) {
  var result = rule_2(input_pos_match, mean, std);
  test.ok(result);
  test.end();
});

tape('rule_2 matches on the negative side of the mean', function(test) {
  var result = rule_2(input_neg_match, mean, std);
  test.ok(result);
  test.end();
});

tape('rule_2 does not match if a sequence crosses the mean', function(test) {
  var result = rule_2(input_no_match, mean, std);
  test.notOk(result);
  test.end();
});
