// rule_6.js
// Four (or five) out of five points in a row are more than 1 standard deviation
// from the mean in the same direction.
var window_size = 5;

export {window_size as rule_6_size};

export function rule_6(data, mean, std) {
  var count = 0, dir, sign = [];
  data.forEach(function(d, i) {
    if (Math.abs(d - mean) >= std) {
      count++;
      // no need to zero check this one
      if (typeof dir === 'undefined') {
        dir = (d - mean) > 0;
      }
      var this_sign = (dir === ((d - mean) > 0));
      sign.push(this_sign);
    }
  });

  var same_side = sign.every(function(d) {
    return (d === sign[0]);
  });

  return (count >= 4 && same_side);
}