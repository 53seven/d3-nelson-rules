# d3-nelson-rules

[![Greenkeeper badge](https://badges.greenkeeper.io/53seven/d3-nelson-rules.svg)](https://greenkeeper.io/)

[![build status](https://travis-ci.org/53seven/d3-nelson-rules.svg)](https://travis-ci.org/53seven/d3-nelson-rules)

d3 utility to apply [nelsons rules](https://en.wikipedia.org/wiki/Nelson_rules) of process control to a set of data.

## Installing

If you use NPM, `npm install d3-nelson-rules`. Otherwise, download the [latest release](https://github.com/53seven/d3-nelson-rules/releases/latest).

## API Reference

```js
var data = [{
  name: 'foo',
  val: 3
} ...];

var nelson = d3.d3_nelson_rules()
  .std(5)
  .mean(1)
  .value(function(d) { return d.val; });

svg.selectAll('rect')
  .data(data)
  .enter()
  ...
  .call(nelson);
```

License
---

MIT
