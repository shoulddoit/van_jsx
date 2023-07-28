# van_jsx

一个简单的 VanJS jsx 拓展。

[VanJS] 是一款自称只有 0.8kB、不需要 React/JSX 的响应式框架。而这个库的目标是让 jsx 转换为 VanJS 的函数调用。

## 特性

- [x] jsx 工厂函数
    - [x] svg 支持
- [x] render 函数

## 核心 API

- `h(name, props, ...children)`: jsx 工厂函数。配合 bundler 的 JSX Factory 选项，可以将 jsx 转换为 h 函数调用；
- `render(container, component)`: 将组件挂载到 container。

## 示例

见 [/examples](/examples/)

## LICENSE

MIT

[VanJS]: https://vanjs.org/


