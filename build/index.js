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

  return createElement("h2", null, "Hello Tiny React ", count, createElement("div", null, "Bye Tiny React"), createElement("button", {
    onClick: () => handleCount('plus')
  }, "+"), createElement("button", {
    onClick: () => handleCount('minus')
  }, "-"));
}

export class Component {}

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return createElement("div", null, "This is Class Component");
  }

}

console.log(Title(), new Body().render()); // 가상돔 확인해보기

render(createElement("div", null, createElement(Title, null), createElement(Body, null)), document.getElementById('root'));