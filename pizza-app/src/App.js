import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Homepage />
    </div>
  );
}

export default App;
