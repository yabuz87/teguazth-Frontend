// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Available from './components/AvailableBus/Available';
import Format from './components/Form/Format';
import { AppProvider } from './components/Context'; // Ensure correct import path
import FillForm from "./components/FillForm/FillForm"
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark-mode');
      htmlElement.classList.remove('light-mode');
    } else {
      htmlElement.classList.add('light-mode');
      htmlElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <AppProvider>
      <div className={darkMode ? "dark-mode" : "light-mode"} style={{ minHeight: '100vh' }}>
        <Router>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Format />} /> {/* Home route */}
            <Route path="/avail" element={<Available />} /> {/* Available route */}
            <Route path="/fillForm" element={<FillForm/>}
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
