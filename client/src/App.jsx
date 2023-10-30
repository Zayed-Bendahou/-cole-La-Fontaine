import Header from './composants/Header';
import Footer from './composants/Footer';
import Service from './Pages/Presentation';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Cycle from './Pages/Cycle';

function App() {
  return (
    <Router>
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
