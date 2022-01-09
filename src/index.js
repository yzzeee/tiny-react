/* @jsx createElement */
import { createElement, render, useState } from './react.js';

function Title() {
  console.count('Check Rendering Title');
  const [count, setCount] = useState(0);

  const handleCount = action => {
    switch (action) {
      case 'plus':
        setCount(count + 1);
        break;
      case 'minus':
        setCount(count - 1);
        break;
    }
  };

  return (
    <h2>
      Hello Tiny React {count}
      <div>Bye Tiny React</div>
      <button onClick={() => handleCount('plus')}>+</button>
      <button onClick={() => handleCount('minus')}>-</button>
    </h2>
  );
}

export class Component {}

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>This is Class Component</div>;
  }
}

console.log(Title(), new Body().render()); // 가상돔 확인해보기

render(
  <div>
    <Title />
    <Body />
  </div>,
  document.getElementById('root')
);
