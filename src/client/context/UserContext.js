import React, { createContext, useState } from 'react'
export const UserContext = createContext()

const URIUSER = '/api/user'
const URIAUTH = '/api/auth'

export const Provider = ({ children }) =>{ 
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const value = {
        user,
        isAuth,
        token,
        loading,
        register: async (dataUser) =>{
            setLoading(true);

            try {
                const response = await fetch(URIUSER, {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(dataUser), 
                    headers:{
                    'Content-Type': 'application/json'
                    }
                })		
                const data = await response.json();

                setLoading(false);
        
            }
            catch (error) {
                console.log(error.message);
            }
        },
        login: async (dataAuth) =>{
            setLoading(true);

            try {
                const response = await fetch(`${URIAUTH}/login`, {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(dataAuth), 
                    headers:{
                    'Content-Type': 'application/json'
                    }
                })		
                const data = await response.json();

                    setLoading(false);
                    setUser(data.body.user)
                    setToken(data.body.token)
                    setIsAuth(true)

                    //console.log(data)

                    window.sessionStorage.setItem('user', data.body.user)
                    window.sessionStorage.setItem('token', data.body.token)
        
            }
            catch (error) {
                console.log(error.message);
            }
        }
    }
    return (
        <UserContext.Provider value = {value}>
            {children}
        </UserContext.Provider>
    )
}


export default {
    Provider,
    Consumer: UserContext.Consumer
}