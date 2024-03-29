import React from 'react';
import './App.css';

class TestReactClassComponent extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestReactClassComponent/>
      </header>
    </div>
  );
}

export default App;
