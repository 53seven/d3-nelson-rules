// rule_1-test.js
var tape = require('tape-catch'),
    rule_1 = require('../').nelson().rule_1;

var std = 1,
    mean = 0;

var input = [3, -3, 2, -2];

var result = input.map(function(i) {
  return rule_1(i, mean, std);
});

tape('rule_1 marks appropriate points', function(test) {
  test.ok(result[0], 'Positive val');
  test.ok(result[1], 'Negative val');

  test.end();
});

tape('rule_1 marks ignores other points', function(test) {
  test.notOk(result[2], 'Positive val');
  test.notOk(result[3], 'Negative val');

  test.end();
});
