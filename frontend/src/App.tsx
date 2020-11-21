import React from 'react';
import './tailwind.output.css';

const classes = {
  wrapper: 'border-2 m-16 p-16',
  title: 'text-gray-800 text-xl text-center font-bold',
};

function App() {
  return (
     <div className={classes.wrapper}>
      <h1 className={classes.title}>Hello World</h1>
    </div>
  );
}

export default App;
