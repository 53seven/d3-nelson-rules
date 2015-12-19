// rule_4-test.js
var tape = require('tape-catch'),
    utils = require('./test-utils'),
    rule_4 = require('../').nelson().rule_4;

var std = 1,
    mean = 0;

var input_pos_match = utils.sample([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
var input_no_match = utils.sample([0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1]);

tape('rule_4 marks noise', function(test) {
  var result = rule_4(input_pos_match, mean, std);
  result.forEach(function(res, i) {
    test.ok(utils.marked(res, 'rule_4'), 'el ' + i + ' is marked');
  });
  test.end();
});

tape('rule_4 does not mark no variance', function(test) {
  var result = rule_4(input_no_match, mean, std);
  result.forEach(function(res, i) {
    test.ok(utils.notMarked(res, 'rule_4'), 'el ' + i + ' is not marked');
  });

  test.end();
});
