import React, { createContext, useState, useEffect } from 'react';

// Create a Context
export const AppContext = createContext();

// Create a Provider component
export const AppProvider = ({ children }) => {
    const [init, setInit] = useState(() => {
        const savedInit = localStorage.getItem('init');
        return savedInit ? JSON.parse(savedInit) : "";
    });

    const [timeD, setTime] = useState(() => {
        const savedTimeD = localStorage.getItem('timeD');
        return savedTimeD ? JSON.parse(savedTimeD) : "";
    });

    const [destination, setDestination] = useState(() => {
        const savedDestination = localStorage.getItem('destination');
        return savedDestination ? JSON.parse(savedDestination) : "";
    });

    const [busId, setBusId] = useState(() => {
        const savedBusId = localStorage.getItem('busId');
        return savedBusId ? JSON.parse(savedBusId) : "";
    });

    // Sync state with localStorage
    useEffect(() => {
        localStorage.setItem('init', JSON.stringify(init));
    }, [init]);

    useEffect(() => {
        localStorage.setItem('timeD', JSON.stringify(timeD));
    }, [timeD]);

    useEffect(() => {
        localStorage.setItem('destination', JSON.stringify(destination));
    }, [destination]);

    useEffect(() => {
        localStorage.setItem('busId', JSON.stringify(busId));
    }, [busId]);
    

    return (
        <AppContext.Provider value={{ init, setInit, timeD, setTime, destination, setDestination, busId, setBusId }}>
            {children}
        </AppContext.Provider>
    );
};
