import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'

import SkillsPage from './pages/skills/SkillsPage';
import SayHi from './pages/contact/SayHi';

function App() {
  return (
    <>
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<SayHi />} />
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;
