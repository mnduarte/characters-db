import React, { createContext, useState } from 'react'
export const MoveContext = createContext()

export const Provider = ({ children }) =>{
    
    const [up, setUp] = useState(false);

    const value = {
        up,
        handleUp: () =>{
            setUp(true)
        },
        handleDown: () =>{
            setUp(false)
        }
    }
    return (
        <MoveContext.Provider value = {value}>
            {children}
        </MoveContext.Provider>
    )
}


export default {
    Provider,
    Consumer: MoveContext.Consumer
}