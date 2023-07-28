import van from 'vanjs-core';

import { isSvg } from './svg';

let htmlTags = van.tags;
let svgTags = van.tagsNS('http://www.w3.org/2000/svg');

/**
 * jsx factory
 * @param {string|(props: object) => HTMLElement} name
 * @param {object|null} props
 * @param  {HTMLElement[]} children
 * @returns
 */
export function h(name, props, ...children) {
  let props_ = props ?? {};

  if (typeof name === 'function') {
    return name.apply(null, [{ ...props_, children }]);
  }

  let tags = isSvg(name) ? svgTags : htmlTags;
  return tags[name]?.apply(null, [props_, ...children]);
}

/**
 * mount root component to container
 * @param {HTMLElement} container
 * @param {HTMLElement} root
 */
export function render(container, root) {
  van.add(container, root);
}
