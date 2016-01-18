// rule_5-test.js
var tape = require('tape-catch'),
    rule_5 = require('../').nelson().rule_5;

var std = 1,
    mean = 0;

var input_pos_match = [2, 1, 2];
var input_neg_match = [-2, 1, -2];
var input_no_match_alt = [2, 1, -2];
var input_no_match_mag = [1.5, 1, 1.5];

tape('rule_5 marks positive trend', function(test) {
  var result = rule_5(input_pos_match, mean, std);
  test.ok(result);

  test.end();
});

tape('rule_5 marks negative trend', function(test) {
  var result = rule_5(input_neg_match, mean, std);
  test.ok(result);

  test.end();
});

tape('rule_5 does not mark no variance', function(test) {
  var resultAlt = rule_5(input_no_match_alt, mean, std);
  test.notOk(resultAlt);

  var resultMag = rule_5(input_no_match_mag, mean, std);
  test.notOk(resultMag);

  test.end();
});
