import React from "react";
import ReactDom from "react-dom";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(num =>
    <li key={num.toString()}>
      {num}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

ReactDom.render(
  <NumberList numbers={[1, 2, 3, 4, 5]} />,
  document.getElementById('root')
);
