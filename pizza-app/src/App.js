import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Homepage from "./components/home/Homepage";
import MobileHome from "./components/home/MobileHome"
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const homepageComponent = window.innerWidth >= 650 ? Homepage : MobileHome;
  console.log(homepageComponent)
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path='/home' exact component={homepageComponent}></Route>
        <Route path='/menu' exact component={Menu}></Route>
      </div>
    </Router>
  );
}

export default App;
