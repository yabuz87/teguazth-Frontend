import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Available from './components/AvailableBus/Available';
import Format from './components/Form/Format';

function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Format />} /> {/* Home route */}
          <Route path="/avail" element={<Available />} /> {/* Available route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
