import logo from './logo.svg';
import './App.css';

import Navigationbar from './Components/Menu bar/menubar';
import Herosection from './Components/herosection/herosection';
import Footer from './Components/Footer/footer';
import Copyright from './Components/copyrightSection/copyright';

function App() {
  return (
    <div className="App">
     <Herosection/>
     <Footer/>
     <Copyright/>
    </div>
  );
}

export default App;
