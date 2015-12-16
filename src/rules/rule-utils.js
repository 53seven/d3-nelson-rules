// rule-utils.js
// utils for the rules

export default function mark(el, rule) {
  el.classed('marked', true);
  el.classed(rule, true);
  return el;
}