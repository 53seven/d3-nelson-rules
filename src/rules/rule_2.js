// rule_2.js
// Nine (or more) points in a row are on the same side of the mean.
var window_size = 9;
import mark from './rule-utils';

export {window_size as rule_2_size};

export function rule_2(data, mean, std) {
  var positive_side = true;
  // make sure all points are on the same side of the mean
  var res = data.every(function(d, i) {
    if (i === 0) {
      positive_side = (d.val - mean) > 0 && (d.val - mean) !== 0;
    }
    if (positive_side && (d.val - mean) <= 0) {
      return false;
    } else if (!positive_side && (d.val - mean) >= 0) {
      return false;
    }
    return true;
  });

  // if so, mark the points
  if (res) {
    data.forEach(function(d) {
      d = mark(d, 'rule_2');
    });
  }

  return data;
}