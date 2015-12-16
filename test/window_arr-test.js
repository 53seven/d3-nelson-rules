// window_arr-test.js
var tape = require('tape-catch'),
    window_arr = require('../').nelson().window_arr;

var sample = [0, 1, 2, 3, 4, 5];

tape('window_arr chunks arrays to the expected dimensions', function(test) {
  var out = window_arr(sample, 3);
  test.equal(out.length, 4);
  out.forEach(function(o) {
    test.equal(o.length, 3);
  });
  test.end();
});
