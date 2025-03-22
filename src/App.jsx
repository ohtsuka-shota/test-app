import React from 'react';
import Quiz from './components/Quiz/Quiz';

const App = () => {
  return (
    <div>
      <h1 className='AppTitle'>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>AWS Quiz App</a>
      </h1>
      <Quiz />
    </div>
  );
};

export default App;
