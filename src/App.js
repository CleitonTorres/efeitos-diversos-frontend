import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import ParallaxBGScrolling from "./components/pages/ParallaxBGScrolling";
import ParallaxSite from "./components/pages/ParallaxSite";
import Home from './components/pages/Home';
import styles from  './components/CSS/App.module.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.body_App}>
        <Navbar custonClass={styles.sticky}/>
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
      </div>
    </Router>
  );
}

export default App;
