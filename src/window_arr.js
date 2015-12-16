// window_arr.js
// Takes an array and returns an array of windows of given size
// elements are NOT cloned from window to window
// if the array.length < size, an empty array is returned
export default function window_arr(array, size) {
  var out = [];
  for (var i = 0; i <= array.length - size; i++) {
    var wind = [];
    for (var j = 0; j < size; j++) {
      wind.push(array[j + i]);
    }
    out.push(wind);
  }
  return out;
}