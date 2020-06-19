import React, { createContext, useState } from 'react'
export const Context = createContext()

export const Provider = ({ children }) =>{
    
    const [up, setUp] = useState(false);

    const value = {
        up,
        handleUp: () =>{
            setUp(!up)
        }
    }
    return (
        <Context.Provider value = {value}>
            {children}
        </Context.Provider>
    )
}


export default {
    Provider,
    Consumer: Context.Consumer
}