import React from 'react';
// import logo from './logo.svg';
// import Home from './home';
// import Counter from './components/countercomponent';
import CounterList from './components/countersList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter Increment Demo</h1>
        {/* <Counter/> */}
       <CounterList/>
      </header>
    </div>
  );
}

export default App;
