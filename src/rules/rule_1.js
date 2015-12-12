// rule_1.js
// One point is more than 3 standard deviations from the mean.
var window_size = 1;
import mark from './rule-utils';

export {window_size as rule_1_size};

export function rule_1(data, mean, std) {
  if (Math.abs(data.val - mean) >= std * 3) {
    mark(data.el, 'rule_1');
  }
  return data;
}