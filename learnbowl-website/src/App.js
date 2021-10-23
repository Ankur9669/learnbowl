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
import Terms from './components/Terms/Terms';
import {lazy, Suspense} from "react";

const LazyNavbar = lazy(() => import("./components/Navbar/Navbar"));
const LazyFooter = lazy(() => import("./components/Footer/Footer"));
const LazyHome = lazy(() => import("./components/Home/Home"));
const LazyVedic = lazy(() => import("./components/Vedic/Vedic"));
const LazyFrench = lazy(() => import("./components/French/French"));
const LazyAbout = lazy(() => import("./components/About/About"));
const LazyContact = lazy(() => import("./components/Contact/Contact"));
const LazyRegistrationSuccesfull = lazy(() => import("./components/RegistrationSuccesfull/RegistrationSuccesfull"));
const LazyFrenchSchool = lazy(() => import("./components/FrenchSchool/FrenchSchool"));
const LazyFrenchSchoolConfirmReg = lazy(() => import("./components/FrenchschoolConfirmReg/FrenchschoolConfirmReg"));
const LazyTerms = lazy(() => import("./components/Terms/Terms"));
const LazyBlog = lazy(() => import("./components/Blog/Blog"));

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>
              <Route path = "/french">
                {/* Lazy Loading Component */}
                <Suspense fallback = {<div></div>}>
                  <LazyFrench/>
                </Suspense>
              </Route>

              <Route path = "/vedic">
                <Suspense fallback = {<div></div>}>
                  <LazyVedic/>
                </Suspense>
              </Route>

              <Route path = "/about">
                <Suspense fallback = {<div></div>}>
                  <LazyAbout/>
                </Suspense>
              </Route>

              <Route path = "/contact">
                <Suspense fallback = {<div></div>}>
                  <LazyContact/>
                </Suspense>
              </Route>

              <Route path = "/registrationsuccessful">
                <Suspense fallback = {<div></div>}>
                  <LazyRegistrationSuccesfull/>
                </Suspense>
              </Route>

              <Route path = "/frenchschool">
                <Suspense fallback = {<div></div>}>
                  <LazyFrenchSchool/>
                </Suspense>
              </Route>

              <Route path = "/404">
                <PageNotFound/>
              </Route>

              <Route path = "/frenchschoolconfirmregistration">
                <Suspense fallback = {<div></div>}>
                  <LazyFrenchSchoolConfirmReg/>
                </Suspense>
              </Route>

              <Route path = "/blog">
                <Suspense fallback = {<div></div>}>
                  <LazyBlog/>
                </Suspense>
              </Route>

              <Route path = "/terms">
                <Suspense fallback = {<div></div>}>
                  <LazyTerms/>
                </Suspense>
              </Route>
              
              <Route path = "/">
                <Suspense fallback = {<div></div>}>
                  <LazyHome/>
                </Suspense>
              </Route>
          </Switch>
          <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
