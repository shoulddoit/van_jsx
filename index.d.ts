import { State } from 'vanjs-core';

export type VanElement = Element;

export type Props = object & { ref?: State<VanElement>; children?: VanElement[] };

export type FunctionComponent = (props?: Props) => VanElement;

export type JsxFactory = (name: string | FunctionComponent, props?: Props, ...children: VanElement[]) => VanElement;

export type RenderFunction = (component: VanElement, container: HTMLElement | string) => void;

declare const h: JsxFactory;

declare const createElement: JsxFactory;

declare const render: RenderFunction;
