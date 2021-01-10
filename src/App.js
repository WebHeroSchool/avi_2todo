import logo from './logo.svg';
import './App.css';

const flag = false;
const count = 10;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "yellow", fontSize: 10 + 20 }}>Lorem, ipsum dolor.</p>
        <p>{count}</p>
        <p>{50}</p>
        <p>{undefined}</p>
        <p>{null}</p>
        <p>{true}</p>
        <p>{false}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {flag ? "flag is true" : "flag is false"}

        </p>
      </header>
    </div>
  );
}

export default App;
