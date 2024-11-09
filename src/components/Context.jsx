import React, {createContext,useState} from 'react';

export const AppContext=createContext();
export const AppProvider=({ children })=>{
    const [init, setInit] = useState("");
    const [timeD, setTime] = useState();
    const [destination, setDestination] = useState(""); // Initialize with an empty string



    return(
        <AppContext.Provider value={{init, setInit, timeD, setTime, destination, setDestination}}>
            {children}
        </AppContext.Provider>
    );
};


