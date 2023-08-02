# van_jsx

一个 VanJS 的 jsx 拓展。

[VanJS] 是一款自称只有 0.8kB、不需要 React/JSX 的响应式框架。而这个库的目标是让 jsx 转换为 VanJS 的函数调用。

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

vanjs 大概是没有专门的组件概念。van_jsx 中一个组件是指返回 HTMLElement 的函数。比如：

```js
function DisplayName({ name }) {
  return <div>{name}</div>;
}

render('#app', <DisplayName name={'Tom'}></DisplayName>);
```

上面的 `DisplayName` 就称为一个组件。需要注意的是，van_jsx 中没有 hook，当 state 变更时，`DisplayName` 函数会重新调用，这点也和 React 类似。

## van_jsx 和 React 区别

虽然 van_jsx 使用 jsx 语法用于创建 HTML，但是其低层是 vanjs，属性实际上是 HTMLElement 的属性，所以部分属性的名称与 React 有所不同。
React 是先创建 vdom 再渲染为 HTML，中间会有属性名称的处理。

下面列出一些比较明显的区别：

| 属性名称 | van_jsx | React   |
| -------- | ------- | ------- |
| 事件     | onclick | onClick |

>好像没有其他了。van_jsx 中的事件是原生事件，需要注意一下。

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
