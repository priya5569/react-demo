import logo from './logo.svg';
import './App.css';
import Classcomponent from './Classcomponent'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Nav from './Nav'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact"element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
      {/*<Classcomponent/>*/}
    </div>

  );
}

export default App;
