
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Mainheader from './MainHeader/Mainheader';
import Section1 from './Components/Section-1/Section1';
import Section2 from './Components/Section-2/Section2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mainheader/>
      <Section1/>
      <Section2/>
    </div>
  );
}

export default App;
