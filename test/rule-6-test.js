// rule_6-test.js
var tape = require('tape-catch'),
    rule_6 = require('../').nelson().rule_6;

var std = 1,
    mean = 0;

var input_pos_match = [2, 1, 2, 0, 1.5];
var input_neg_match = [-2, -1, -2, 0, -1.5];
var input_no_match_alt = [2, 1, -2, 0, 1.5];
var input_no_match_mag = [0.5, 1, 0.5, 4, 0];

tape('rule_6 marks positive trend', function(test) {
  var result = rule_6(input_pos_match, mean, std);
  test.ok(result);

  test.end();
});

tape('rule_6 marks negative trend', function(test) {
  var result = rule_6(input_neg_match, mean, std);
  test.ok(result);

  test.end();
});

tape('rule_6 does not mark no variance', function(test) {
  var resultAlt = rule_6(input_no_match_alt, mean, std);
  test.notOk(resultAlt);

  var resultMag = rule_6(input_no_match_mag, mean, std);
  test.notOk(resultMag);

  test.end();
});
