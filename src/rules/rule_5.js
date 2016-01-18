// rule_5.js
// Two (or three) out of three points in a row are more than 2 standard
// deviations from the mean in the same direction.
var window_size = 3;

export {window_size as rule_5_size};

export function rule_5(data, mean, std) {
  var count = 0, dir, sign = [];
  data.forEach(function(d, i) {
    if (Math.abs(d.val - mean) >= 2 * std) {
      count++;
      // no need to zero check this one
      if (typeof dir === 'undefined') {
        dir = (d.val - mean) > 0;
      }
      var this_sign = (dir === ((d.val - mean) > 0));
      sign.push(this_sign);
    }
  });

  var same_side = sign.every(function(d) {
    return (d === sign[0]);
  });

  return (count >= 2 && same_side);
}