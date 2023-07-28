import van from 'vanjs-core';

let htmlTags = van.tags;

export function h(name, props, ...children) {
  let props_ = props ?? {};

  if (typeof name === 'function') {
    return name.apply(null, [{ ...props_, children }]);
  }

  return htmlTags[name]?.apply(null, [props_, ...children]);
}

export function render(container, root) {
  van.add(container, root);
}
