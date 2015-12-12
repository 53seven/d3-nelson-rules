// rule_6-test.js
var tape = require('tape-catch'),
    utils = require('./test-utils'),
    rule_6 = require('../').nelson().rule_6;

var std = 1,
    mean = 0;

var input_pos_match = utils.sample([2, 1, 2, 0, 1.5]);
var input_neg_match = utils.sample([-2, -1, -2, 0, -1.5]);
var input_no_match_alt = utils.sample([2, 1, -2, 0, 1.5]);
var input_no_match_mag = utils.sample([0.5, 1, 0.5, 4, 0]);

tape('rule_6 marks positive trend', function(test) {
  var result = rule_6(input_pos_match, mean, std);
  test.ok(utils.marked(result[0].el, 'rule_6'), 'el 0 is marked');
  test.ok(utils.marked(result[1].el, 'rule_6'), 'el 1 is marked');
  test.ok(utils.marked(result[2].el, 'rule_6'), 'el 2 is marked');
  test.ok(utils.marked(result[4].el, 'rule_6'), 'el 4 is marked');

  test.end();
});

tape('rule_6 marks negative trend', function(test) {
  var result = rule_6(input_neg_match, mean, std);
  test.ok(utils.marked(result[0].el, 'rule_6'), 'el 0 is marked');
  test.ok(utils.marked(result[1].el, 'rule_6'), 'el 1 is marked');
  test.ok(utils.marked(result[2].el, 'rule_6'), 'el 2 is marked');
  test.ok(utils.marked(result[4].el, 'rule_6'), 'el 4 is marked');

  test.end();
});

tape('rule_6 does not mark no variance', function(test) {
  var resultAlt = rule_6(input_no_match_alt, mean, std);
  resultAlt.forEach(function(res, i) {
    test.ok(utils.notMarked(res.el, 'rule_6'), 'el alt ' + i + ' is not marked');
  });

  var resultMag = rule_6(input_no_match_mag, mean, std);
  resultMag.forEach(function(res, i) {
    test.ok(utils.notMarked(res.el, 'rule_6'), 'el mag ' + i + ' is not marked');
  });

  test.end();
});
