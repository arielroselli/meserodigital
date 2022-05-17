import { children, createContext, useState, useMemo } from "react";




export const DataContext = createContext();
export const DataProvider = ({ children }) => {

    




    return (
        <DataContext.Provider value={{

          

            
        }}>
            {children}

        </DataContext.Provider>
    )
}
