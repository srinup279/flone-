import './App.css';
import {BrowserRouter as Router , Route, Switch, Redirect} from "react-router-dom"
import Home from './Compnents/Home'
import About from './Compnents/About'
import Portfolio from './Compnents/Portfolio'
import ContactUs from './Compnents/ContactUs'
import Navbar from './Compnents/Navbar';
import Footer from './Compnents/Footer';
import Footer1 from './Compnents/Footer1';


function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={ContactUs}/>
            <Redirect to="/"/>
        </Switch> 

        <Footer/> 
        <Footer1/>
      </Router>
    </div>
  );
}

export default App;
