import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Images from './pages/Images';
import Events from './pages/Events';
import TestGround from './pages/testGround';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/library" element={<Images />} />
            <Route path="/events" element={<Events />} />
            <Route path="/test" element={<TestGround />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;