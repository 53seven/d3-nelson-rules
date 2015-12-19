// rule-utils.js
// utils for the rules

export default function mark(data, rule) {
  data.el.attr('marked', true);
  data.el.attr(rule, true);
  return data;
}