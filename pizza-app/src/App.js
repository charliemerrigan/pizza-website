import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path='/home' exact component={Homepage}></Route>
        <Route path='/menu' exact component={Menu}></Route>
      </div>
    </Router>
  );
}

export default App;
