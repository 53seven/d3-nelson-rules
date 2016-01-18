// rule_4-test.js
var tape = require('tape-catch'),
    rule_4 = require('../').nelson().rule_4;

var std = 1,
    mean = 0;

var input_pos_match = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
var input_no_match = [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1];

tape('rule_4 marks noise', function(test) {
  var result = rule_4(input_pos_match, mean, std);
  test.ok(result);
  test.end();
});

tape('rule_4 does not mark no variance', function(test) {
  var result = rule_4(input_no_match, mean, std);
  test.notOk(result);

  test.end();
});
