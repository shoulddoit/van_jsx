import { h, render } from '../../';

let __h__ = h;

function Header({ name, children }) {
  return (
    <div>
      <h1>{name}</h1>
      {children}
    </div>
  );
}

function App() {
  return (
    <Header name={'hello'}>
      <h2>world</h2>
    </Header>
  );
}

render(document.body, <App />);
