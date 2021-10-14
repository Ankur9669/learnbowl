import './App.css';
import Navbar from './components/Navbar/Navbar';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import French from './components/French/French';
import About from './components/About/About';
import Vedic from './components/Vedic/Vedic';
import Contact from './components/Contact/Contact';
import RegistrationSuccesfull from './components/RegistrationSuccesfull/RegistrationSuccesfull';
import FrenchSchool from './components/FrenchSchool/FrenchSchool';
import PageNotFound from './components/404/PageNotFound';
import FrenchschoolConfirmReg from './components/FrenchschoolConfirmReg/FrenchschoolConfirmReg';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path = "/french">
            <Navbar/>
            <French/>
          </Route>
          <Route path = "/vedic">
            <Navbar/>
            <Vedic/>
          </Route>
          <Route path = "/about">
            <Navbar/>
            <About/>
          </Route>
          <Route path = "/contact">
            <Navbar/>
            <Contact/>
          </Route>
          <Route path = "/registrationsuccessful">
            <Navbar/>
            <RegistrationSuccesfull/>
          </Route>
          <Route path = "/frenchschool">
            <Navbar/>
            <FrenchSchool/>
          </Route>
          <Route path = "/404">
            <Navbar/>
            <PageNotFound/>
          </Route>
          <Route path = "/frenchschoolconfirmregistration">
            <Navbar/>
            <FrenchschoolConfirmReg/>
          </Route>
          <Route path = "/blog">
            <Navbar/>
            <Blog/>
          </Route>
          <Route path = "/">
            <Navbar/>
            <Home/>
          </Route>
        </Switch>
        
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
