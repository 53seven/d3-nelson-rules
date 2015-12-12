// rule_1-test.js
var tape = require('tape-catch'),
    utils = require('./test-utils'),
    rule_1 = require('../').nelson().rule_1;

var std = 1,
    mean = 0;

var input = utils.sample([3, -3, 2, -2]);

var result = input.map(function(i) {
  return rule_1(i, mean, std);
});

tape('rule_1 marks appropriate points', function(test) {
  test.ok(utils.marked(result[0].el, 'rule_1'), 'Positive val');
  test.ok(utils.marked(result[1].el, 'rule_1'), 'Negative val');

  test.end();
});

tape('rule_1 marks ignores other points', function(test) {
  test.ok(utils.notMarked(result[2].el, 'rule_1'), 'Positive val');
  test.ok(utils.notMarked(result[3].el, 'rule_1'), 'Negative val');

  test.end();
});
