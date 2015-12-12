// rule-utils.js
// utils for the rules

export default function mark(el, rule) {
  el.addClass('marked');
  el.addClass(rule);
  return el;
}