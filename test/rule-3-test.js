// rule_3-test.js
var tape = require('tape-catch'),
    _ = require('lodash'),
    rule_3 = require('../').nelson().rule_3;

var std = 1,
    mean = 0;

var input_pos_match = _.range(1, 6);
var input_neg_match = _.range(-1, -6, -1);
var input_no_match_noise = [0, 1, 0, 1, 0, 1];
var input_no_match_flat = [0, 0, 0, 0, 0, 0];

tape('rule_3 marks increasing trends', function(test) {
  var result = rule_3(input_pos_match, mean, std);
  test.ok(result);
  test.end();
});

tape('rule_3 marks decreasing trends', function(test) {
  var result = rule_3(input_neg_match, mean, std);
  test.ok(result);
  test.end();
});

tape('rule_3 does not mark no trend', function(test) {
  var resultNoise = rule_3(input_no_match_noise, mean, std);
  test.notOk(resultNoise, 'noisy trend');

  var resultFlat = rule_3(input_no_match_flat, mean, std);
  test.notOk(resultFlat, 'flat trend');

  test.end();
});
