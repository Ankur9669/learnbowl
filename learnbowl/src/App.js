
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Mainheader from './MainHeader/Mainheader';
import Section1 from './Components/Section-1/Section1';
import Section2 from './Components/Section-2/Section2';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mainheader/>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  );
}

export default App;
