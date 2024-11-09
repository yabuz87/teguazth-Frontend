import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [init, setInit] = useState("");
    const [timeD, setTime] = useState(""); // Initialize with an empty string
    const [destination, setDestination] = useState(""); // Initialize with an empty string
    const [busId, setBusId] = useState("");

    return (
        <AppContext.Provider value={{ init, setInit, timeD, setTime, destination, setDestination, busId, setBusId }}>
            {children}
        </AppContext.Provider>
    );
};
