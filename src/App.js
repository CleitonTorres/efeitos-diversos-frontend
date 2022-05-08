import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import ParallaxBGScrolling from "./components/pages/ParallaxBGScrolling";
import ParallaxSite from "./components/pages/ParallaxSite";
import Home from './components/pages/Home';

function App() {
  const [show, setShow] = useState();

  function nav(page){
    setShow(page)
    console.log(page)
  }
  return (
    <Router>
      <Navbar nav={nav}/>
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/parallax01'
          element={<ParallaxBGScrolling />}
        />
        <Route 
          path='/parallax02'
          element={<ParallaxSite />}
        />
      </Routes>
    </Router>
  );
}

export default App;
