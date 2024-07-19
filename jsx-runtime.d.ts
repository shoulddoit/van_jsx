import { VanElement } from './index';

type InnerElement = HTMLElementTagNameMap;
export type TagOption<K extends keyof InnerElement> = OrVanAttribute<
  Omit<InnerElement[K], 'ref' | 'children' | 'key'>
> &
  Pick<InnerElement[K], 'ref' | 'children' | 'key'>;

export declare namespace JSX {
  type ElementType = string | JSXElementType;
  interface ElementAttributesProperty {
    props: object;
  }
  interface ElementChildrenAttribute {
    children: object;
  }
  interface Element extends VanElement {}
  interface IntrinsicAttributes {
    key?: Key;
  }
  type IntrinsicElements = {
    [K in keyof InnerElement]: TagOption<K>;
  };
}
