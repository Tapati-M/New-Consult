import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Pages/Store"; 
import Blog from './Pages/Blog';
import Horoscope from './Pages/Horoscope';
import ConsultAstrologer from './Pages/ConsultAstrologer';
import KundliMatching from './Pages/KundliMatching';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
function App() {
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render Home only on the root path */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/consult-astrologer" element={<ConsultAstrologer />} />
        <Route path="/Kundli-matching" element={<KundliMatching />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/store" element={<Store />} />
        {/* <Route path="/products" element={<ProductsPage />} /> Assuming you have a ProductsPage */}
        {/* Main Culprit is the Above line for re rendering of home objects again in store , Home also should be
     like this */}
      </Routes>
    </Router><Footer /></>
  );
}

export default App;