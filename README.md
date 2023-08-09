# van_jsx

一个 VanJS 的 jsx 拓展。

[VanJS] 是一款号称不足 1kb、不需要 React/JSX 的响应式框架。van_js 目标是让 jsx 转换为 VanJS 函数调用。

## 特性

- [x] jsx 工厂函数
  - [x] svg 支持
- [x] render 函数
- [x] IDE 支持（vscode 对 jsx 算是原生支持）

## 核心 API

`h`

- 函数签名: `h(name, props, ...children)`
- 描述: jsx 工厂函数。配合 bundler 的 JSX Factory 选项，可以将 jsx 转换为 h 函数调用
- 参数:
  - name: tag 名称或组件
  - props: 属性对象
  - children: 子元素
- 返回值: HTML 元素或 SVG 元素

`render`

- 函数签名: `h(container, componentOrHTMLElement)`
- 描述: 将组件挂载到 container
- 参数:
  - container: 一个元素或元素的 ID
  - componentOrHTMLElement: 组件或元素
- 返回值: 无

## 组件

VanJS 没有专门的组件概念， VanJS 的本质是 `document.createElement`。但 van_jsx 引入了组件概念。在 van_jsx 中一个组件是指返回 HTMLElement 的函数。

比如：

```js
function DisplayName({ name }) {
  return <div>{name}</div>;
}

render('#app', <DisplayName name={'Tom'}></DisplayName>);
```

上面的 `DisplayName` 就称为一个组件。

## 响应式

所谓的“响应式”是指数据变化会自动更新视图。VanJS 内置了 van.state 用于实现响应式开发范式。van.state 需要将数据包装为函数来追踪。示例可以参考 [reactive](./examples/reactive/index.jsx)。

## van_jsx 和 React 区别

虽然 van_jsx 使用 jsx 语法用于创建 HTML，但是其低层是 VanJS，更深层的实现原理是 DOM 操作。与 React 明显不同。React 是先创建 vdom 然后渲染为 HTML。

## 构建

```sh
pnpm i
pnpm build
pnpm build-examples
```

## 示例

见 [/examples](/examples/)

## LICENSE

MIT

[vanjs]: https://vanjs.org/
