import { useEffect } from 'react';
import Header from './composants/Header';
import Footer from './composants/Footer';
import Service from './Pages/Presentation';
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Contact from './Pages/Contact';
import Cycle from './Pages/Cycle';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="mb-24">
        <Header />
      </div>
      <div className="App min-h-screen flex flex-col bg-red-100 ">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="/Cycle" element={<Cycle />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
export default App;
