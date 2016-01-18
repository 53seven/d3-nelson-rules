// rule_7.js
// Fifteen points in a row are all within 1 standard deviation of the mean on
// either side of the mean.
var window_size = 15;

export {window_size as rule_7_size};

export function rule_7(data, mean, std) {
  var res = data.every(function(d) {
    return (Math.abs(d - mean) <= std);
  });

  return res;
}