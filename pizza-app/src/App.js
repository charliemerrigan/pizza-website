import "./App.css";
import Header from "./components/Header.js";
import Homepage from "./components/home/Homepage";
import MobileHome from "./components/home/MobileHome";
import Menu from "./components/menu/Menu";
import MobileMenu from "./components/menu/MobileMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./components/about/AboutUs";
import ContactUs from "./components/contact/ContactUs";
import MobileAboutUs from "./components/about/MobileAboutUs";

function App() {
  const homepageComponent = window.innerWidth >= 650 ? Homepage : MobileHome;
  const menuComponent = window.innerWidth >= 650 ? Menu : MobileMenu;
  const aboutUsComponent = window.innerWidth >= 650 ? AboutUs : MobileAboutUs;
  const contactUsComponent = window.innerWidth >= 650 ? ContactUs : MobileAboutUs;
  console.log(homepageComponent);
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path="/home" exact component={homepageComponent}></Route>

        <Route path="/menu" exact component={menuComponent}></Route>
        <Route path="/about-us" exact component={aboutUsComponent}></Route>
        <Route path="/contact-us" exact component={contactUsComponent}></Route>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
