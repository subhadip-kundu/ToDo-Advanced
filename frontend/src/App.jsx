import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About/AboutUs';

import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
