export type Maker = (props?: object & {children: Array<HTMLElement | SVGElement>}) => HTMLElement | SVGElement

export type JsxFactory = (name: string | Maker, props?: object, ...children: Array<HTMLElement | SVGElement>) => HTMLElement | SVGElement

export type RenderFunction = (container: HTMLElement, component: HTMLElement | SVGElement) => void;

declare const h: JsxFactory

declare const render: RenderFunction
