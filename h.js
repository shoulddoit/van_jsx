import van from 'vanjs-core';

import { isSvg } from './svg';

let htmlTags = van.tags;
let svgTags = van.tagsNS('http://www.w3.org/2000/svg');

export function h(name, props, ...children) {
  let props_ = props ?? {};

  if (typeof name === 'function') {
    return name.apply(null, [{ ...props_, children }]);
  }

  let tags = isSvg(name) ? svgTags : htmlTags;
  return tags[name]?.apply(null, [props_, ...children]);
}

export function render(container, root) {
  van.add(container, root);
}
