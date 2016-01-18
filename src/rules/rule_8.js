// rule_8.js
// Eight points in a row exist with none within 1 standard deviation of the mean
// and the points are in both directions from the mean.
var window_size = 8;

export {window_size as rule_8_size};

export function rule_8(data, mean, std) {
  var res = data.every(function(d) {
    return (Math.abs(d - mean) >= std);
  });

  return res;
}