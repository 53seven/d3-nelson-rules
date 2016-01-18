// rule_1.js
// One point is more than 3 standard deviations from the mean.
var window_size = 1;

export {window_size as rule_1_size};

export function rule_1(data, mean, std) {
  return (Math.abs(data - mean) >= std * 3);
}