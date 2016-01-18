// rule_3.js
// Six (or more) points in a row are continually increasing (or decreasing).
var window_size = 6;

export {window_size as rule_3_size};

export function rule_3(data, mean, std) {
  // figure out trend direction
  var diff = (data[1] - data[0]);
  if (diff === 0) {
    // no trend
    return data;
  }
  var up = diff > 0;

  var res = data.every(function(d, i, arr) {
    if (arr[i + 1]) {
      if (up && (d > arr[i + 1])) {
        // trending up, but current val is greater than next
        return false;
      } else if (!up && (d < arr[i + 1])) {
        // trending down, but current val is less than next
        return false;
      }
      return true;
    }
    // at the last elem, return truth for good measure
    return true;
  });

  return res;
}
