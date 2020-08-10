import React from 'react';
import logo from './logo.svg';
import Home from './home';
import Counter from './components/countercomponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter Increment Demo</h1>
        <Counter/>
       
      </header>
    </div>
  );
}

export default App;
