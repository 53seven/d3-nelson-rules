// rule_7-test.js
var tape = require('tape-catch'),
    rule_7 = require('../').nelson().rule_7;

var std = 1,
    mean = 0;

var input_pos_match = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
var input_no_match = [0, 1, 0, 1, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0];

tape('rule_7 marks low values', function(test) {
  var result = rule_7(input_pos_match, mean, std);
  test.ok(result);
  test.end();
});

tape('rule_7 does not mark higher values', function(test) {
  var result = rule_7(input_no_match, mean, std);
  test.notOk(result);

  test.end();
});
