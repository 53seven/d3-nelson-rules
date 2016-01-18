// rule_5-test.js
var tape = require('tape-catch'),
    utils = require('./test-utils'),
    rule_5 = require('../').nelson().rule_5;

var std = 1,
    mean = 0;

var input_pos_match = utils.sample([2, 1, 2]);
var input_neg_match = utils.sample([-2, 1, -2]);
var input_no_match_alt = utils.sample([2, 1, -2]);
var input_no_match_mag = utils.sample([1.5, 1, 1.5]);

tape('rule_5 marks positive trend', function(test) {
  var result = rule_5(input_pos_match, mean, std);
  test.ok(utils.marked(result[0], 'rule_5'), 'el 0 is marked');
  test.ok(utils.marked(result[2], 'rule_5'), 'el 2 is marked');

  test.end();
});

tape('rule_5 marks negative trend', function(test) {
  var result = rule_5(input_neg_match, mean, std);
  test.ok(utils.marked(result[0], 'rule_5'), 'el 0 is marked');
  test.ok(utils.marked(result[2], 'rule_5'), 'el 2 is marked');

  test.end();
});

tape('rule_5 does not mark no variance', function(test) {
  var resultAlt = rule_5(input_no_match_alt, mean, std);
  resultAlt.forEach(function(res, i) {
    test.ok(utils.notMarked(res, 'rule_5'), 'el ' + i + ' is not marked');
  });

  var resultMag = rule_5(input_no_match_mag, mean, std);
  resultMag.forEach(function(res, i) {
    test.ok(utils.notMarked(res, 'rule_5'), 'el ' + i + ' is not marked');
  });

  test.end();
});
