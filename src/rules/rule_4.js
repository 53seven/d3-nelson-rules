// rule_4.js
// Fourteen (or more) points in a row alternate in direction,
// increasing then decreasing.
var window_size = 14;
import mark from './rule-utils';

export {window_size as rule_4_size};

export function rule_4(data, mean, std) {
  // figure out trend direction
  var dir, diff;
  var res = data.every(function(d, i, arr) {
    if (i === 0) {
      // set the initial direction
      diff = (d.val - arr[i + 1].val);
      if (diff === 0) {
        return false;
      }
      dir = diff > 0;
    } else if (arr[i + 1]) {
      diff = (d.val - arr[i + 1].val);
      if (diff === 0) {
        return false;
      }
      // if the direction is the same sign as last time
      if (dir === (diff > 0)) {
        return false;
      }
      dir = diff > 0;
      return true;

    }
    return true;
  });

  // if so, mark the points
  if (res) {
    data.forEach(function(d) {
      d = mark(d, 'rule_4');
    });
  }

  return data;
}