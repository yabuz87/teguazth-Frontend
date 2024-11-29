import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import BusList from './components/BuseList/BusList';
import { AppProvider } from './components/Context'; // Ensure correct import path
import FillForm from './components/FillForm/FillForm';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

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
        <Router>
        
            <div className={darkMode ? "dark-mode" : "light-mode" } style={{ minHeight: '100vh' }}>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/avail" element={<BusList/>}/>
                    <Route path="/fill" element={<FillForm/>}/>
                </Routes>
                
            </div>
            </Router>
        </AppProvider>
    );
}

export default App;
