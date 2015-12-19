/* global d3 */
// nelson.js
export default nelson;

import {rule_1, rule_1_size} from './rules/rule_1.js';
import {rule_2, rule_2_size} from './rules/rule_2.js';
import {rule_3, rule_3_size} from './rules/rule_3.js';
import {rule_4, rule_4_size} from './rules/rule_4.js';
import {rule_5, rule_5_size} from './rules/rule_5.js';
import {rule_6, rule_6_size} from './rules/rule_6.js';
import {rule_7, rule_7_size} from './rules/rule_7.js';
import {rule_8, rule_8_size} from './rules/rule_8.js';
import window_arr from './window_arr.js';

var rule_array = [
  {rule: rule_1, size: rule_1_size},
  {rule: rule_2, size: rule_2_size},
  {rule: rule_3, size: rule_3_size},
  {rule: rule_4, size: rule_4_size},
  {rule: rule_5, size: rule_5_size},
  {rule: rule_6, size: rule_6_size},
  {rule: rule_7, size: rule_7_size},
  {rule: rule_8, size: rule_8_size}
];

function nelson() {

  var mean, std, get_value;

  function rule_checker(selection) {
    // collect the values and the elements that we are operating on
    // (since we need memory to do our rule processing)
    var elems = [];
    selection.each(function(d, i) {
      var value = (typeof(get_value) === 'function' ? get_value(d) : get_value);
      var element = d3.select(this);
      elems.push({
        el: element,
        val: value
      });
    });

    // check to see if we need to calc mean + std
    if (!mean) {
      mean = d3.mean(elems, function(d) { return d.val; });
    }
    if (!std) {
      std = d3.deviation(elems, function(d) { return d.val; });
    }

    // alright, now that we have our data + elements lets apply each rule
    // to the necessary window sizes
    rule_array.forEach(function(rule_elem, i) {
      var windows = window_arr(elems, rule_elem.size);
      windows.forEach(function(wind) {
        rule_elem.rule(wind, mean, std);
      });
    });

  }

  rule_checker.mean = function(val) {
    if (!arguments.length) {
      return mean;
    }
    mean = val;
    return rule_checker;
  };

  rule_checker.std = function(val) {
    if (!arguments.length) {
      return std;
    }
    std = val;
    return rule_checker;
  };

  rule_checker.value = function(val) {
    if (!arguments.length) {
      return get_value;
    }
    get_value = val;
    return rule_checker;
  };

  rule_checker.rule_1 = rule_1;
  rule_checker.rule_2 = rule_2;
  rule_checker.rule_3 = rule_3;
  rule_checker.rule_4 = rule_4;
  rule_checker.rule_5 = rule_5;
  rule_checker.rule_6 = rule_6;
  rule_checker.rule_7 = rule_7;
  rule_checker.rule_8 = rule_8;
  rule_checker.window_arr = window_arr;

  return rule_checker;
}
