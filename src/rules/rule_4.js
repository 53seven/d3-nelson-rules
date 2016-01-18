// rule_4.js
// Fourteen (or more) points in a row alternate in direction,
// increasing then decreasing.
var window_size = 14;

export {window_size as rule_4_size};

export function rule_4(data, mean, std) {
  // figure out trend direction
  var dir, diff;
  var res = data.every(function(d, i, arr) {
    if (i === 0) {
      // set the initial direction
      diff = (d - arr[i + 1]);
      if (diff === 0) {
        return false;
      }
      dir = diff > 0;
    } else if (arr[i + 1]) {
      diff = (d - arr[i + 1]);
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

  return res;
}