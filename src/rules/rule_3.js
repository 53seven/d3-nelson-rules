// rule_3.js
// Six (or more) points in a row are continually increasing (or decreasing).
var window_size = 6;
import mark from './rule-utils';

export {window_size as rule_3_size};

export function rule_3(data, mean, std) {
  // figure out trend direction
  var diff = (data[1].val - data[0].val);
  if (diff === 0) {
    // no trend
    return data;
  }
  var up = diff > 0;

  var res = data.every(function(d, i, arr) {
    if (arr[i + 1]) {
      if (up && (d.val > arr[i + 1].val)) {
        // trending up, but current val is greater than next
        return false;
      } else if (!up && (d.val < arr[i + 1].val)) {
        // trending down, but current val is less than next
        return false;
      }
      return true;
    }
    // at the last elem, return truth for good measure
    return true;
  });

  // if so, mark the points
  if (res) {
    data.forEach(function(d) {
      d.el = mark(d.el, 'rule_3');
    });
  }

  return data;
}
