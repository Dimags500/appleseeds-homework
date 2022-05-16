import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{data[0] + " " + data[1]}</p>
        <p>{number1 + number2}</p>
        <p>
          the length of '{string}' is {string.length}
        </p>
      </header>
    </div>
  );
}

export default App;
