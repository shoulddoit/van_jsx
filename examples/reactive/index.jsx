import { h, render } from '../../';
import van from 'vanjs-core';

function DisplayNumber({ num }) {
  return <h1 style={() => `color: ${num % 2 === 0 ? 'green' : 'red'}`}>{num}</h1>;
}

function App() {
  const num = van.state(0);

  function add() {
    num.val += 1;
  }

  return (
    <div>
      {() => <DisplayNumber num={num.val}></DisplayNumber>}
      <button onclick={add}>ADD</button>
    </div>
  );
}

render(<App />, '#app');
