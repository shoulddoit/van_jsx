import van from 'vanjs-core';

import { isSvg } from './svg';

let htmlTags = van.tags;
let svgTags = van.tags('http://www.w3.org/2000/svg');

export function createElement(name, props, ...children) {
  let props_ = props ?? {};

  if (typeof name === 'function') {
    return name.apply(null, [{ ...props_, children }]);
  }

  let tags = isSvg(name) ? svgTags : htmlTags;
  const el = tags[name]?.apply(null, [props_, ...children]);
  if (props_.ref?.val) {
    props_.ref.val = el;
  }
  return el;
}

export const h = createElement;

export function render(element, container) {
  let container_ = container;
  if (typeof container === 'string') {
    container_ = document.querySelector(container);
  }

  van.add(container_, element);
}
