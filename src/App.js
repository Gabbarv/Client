import React from 'react';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Construction from './components/Category/Construction';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import './App.css';

function App() {
 return (
  <>
  <Router>
  <Routes>
  <Route path='/Client' element={<Construction/>}/>
    <Route path='/' element={<Construction/>}/>
    <Route path='/9783243399/admin' element={<Admin/>}/>
  </Routes>

  </Router>
  
  
 
  </>
 )
}

export default App;
