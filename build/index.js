/* @jsx createElement */
import { createElement, render } from './react.js';

function Title() {
  return createElement("h2", null, "Hello Tiny React ", createElement("div", null, "Bye Tiny React"));
}

render(createElement(Title, null), document.getElementById('root'));