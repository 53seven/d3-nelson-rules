// rule_3-test.js
var tape = require('tape-catch'),
    _ = require('lodash'),
    utils = require('./test-utils'),
    rule_3 = require('../').nelson().rule_3;

var std = 1,
    mean = 0;

var input_pos_match = utils.sample(_.range(1, 6));
var input_neg_match = utils.sample(_.range(-1, -6, -1));
var input_no_match_noise = utils.sample([0, 1, 0, 1, 0, 1]);
var input_no_match_flat = utils.sample([0, 0, 0, 0, 0, 0]);

tape('rule_3 marks increasing trends', function(test) {
  var result = rule_3(input_pos_match, mean, std);
  result.forEach(function(res, i) {
    test.ok(utils.marked(res.el, 'rule_3'), 'el ' + i + ' is marked');
  });
  test.end();
});

tape('rule_3 marks decreasing trends', function(test) {
  var result = rule_3(input_neg_match, mean, std);
  result.forEach(function(res, i) {
    test.ok(utils.marked(res.el, 'rule_3'), 'el ' + i + ' is marked');
  });
  test.end();
});

tape('rule_3 does not mark no trend', function(test) {
  var resultNoise = rule_3(input_no_match_noise, mean, std);
  resultNoise.forEach(function(res, i) {
    test.ok(utils.notMarked(res.el, 'rule_3'), 'el ' + i + ' is not marked');
  });

  var resultFlat = rule_3(input_no_match_flat, mean, std);
  resultFlat.forEach(function(res, i) {
    test.ok(utils.notMarked(res.el, 'rule_3'), 'el ' + i + ' is not marked');
  });
  test.end();
});
