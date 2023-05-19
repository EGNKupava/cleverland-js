import React from 'react';
import {render} from 'react-dom';
// Какой порядок консолей выведется

const C1 = ({children}) => {
  console.log(1);

  userEffect(() => {
    console.log(2);
  });
  return <div ref={(element) => console.log(5)}>{children}</div>;
};

const C2 = ({children}) => {
  console.log(3);

  userEffect(() => {
    console.log(4);
  });

  return <div>How are you?</div>;
};

const App = () => (
  <C1>
    <C2 />
  </C1>
);

render(<App />, document.getElementById('root'));

// Right answer 1 - 3 - 5 - 4 - 2
