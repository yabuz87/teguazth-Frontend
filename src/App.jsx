import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { AppProvider } from './components/Context'; // Ensure correct import path
import './App.css';
import Footer from './components/footer/Footer';

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
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Home />
                <Footer/>
            </div>
        </AppProvider>
    );
}

export default App;
