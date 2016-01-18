/* global d3 */
// nelson.js
export default nelson;

import {process_control} from 'd3-process-control';

import {rule_1, rule_1_size} from './rules/rule_1.js';
import {rule_2, rule_2_size} from './rules/rule_2.js';
import {rule_3, rule_3_size} from './rules/rule_3.js';
import {rule_4, rule_4_size} from './rules/rule_4.js';
import {rule_5, rule_5_size} from './rules/rule_5.js';
import {rule_6, rule_6_size} from './rules/rule_6.js';
import {rule_7, rule_7_size} from './rules/rule_7.js';
import {rule_8, rule_8_size} from './rules/rule_8.js';


function nelson() {

  var rule_checker = process_control()
    .rule({
      'rule_1': {
        size: rule_1_size,
        rule: rule_1
      },
      'rule_2': {
        size: rule_2_size,
        rule: rule_2
      },
      'rule_3': {
        size: rule_3_size,
        rule: rule_3
      },
      'rule_4': {
        size: rule_4_size,
        rule: rule_4
      },
      'rule_5': {
        size: rule_5_size,
        rule: rule_5
      },
      'rule_6': {
        size: rule_6_size,
        rule: rule_6
      },
      'rule_7': {
        size: rule_7_size,
        rule: rule_7
      },
      'rule_8': {
        size: rule_8_size,
        rule: rule_8
      }
    });

  rule_checker.rule_1 = rule_1;
  rule_checker.rule_2 = rule_2;
  rule_checker.rule_3 = rule_3;
  rule_checker.rule_4 = rule_4;
  rule_checker.rule_5 = rule_5;
  rule_checker.rule_6 = rule_6;
  rule_checker.rule_7 = rule_7;
  rule_checker.rule_8 = rule_8;


  return rule_checker;
}
