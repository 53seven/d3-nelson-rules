// rule_2.js
// Nine (or more) points in a row are on the same side of the mean.
var window_size = 9;

export {window_size as rule_2_size};

export function rule_2(data, mean, std) {
  var positive_side = true;
  // make sure all points are on the same side of the mean
  var res = data.every(function(d, i) {
    if (i === 0) {
      positive_side = (d - mean) > 0 && (d - mean) !== 0;
    }
    if (positive_side && (d - mean) <= 0) {
      return false;
    } else if (!positive_side && (d - mean) >= 0) {
      return false;
    }
    return true;
  });

  return res;
}