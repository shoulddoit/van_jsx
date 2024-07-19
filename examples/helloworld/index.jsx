import { render } from '../../';

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

render(<App />, document.body);
