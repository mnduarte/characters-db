import React, { createContext, useState } from 'react'
export const CharacterContext = createContext()

const URI = '/api/character'

const fetchData = async (apiUrl) => {
    try {
        const token = await window.sessionStorage.getItem('token')
        const response = await fetch(apiUrl, {
            headers:{
                'Content-Type': 'application/json',
				'authorization': token
            }
        })		
        const data = await response.json();
        return data.body
    }
    catch (error) {
        console.log(error.message);
        setError(true)
        return             
    }
}

export const Provider = ({ children }) =>{ 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1); 
    const [limit, setLimit] = useState(5);
    const [characters, setCharacters] = useState([]);

    const value = {
        loading,
        characters,
        loadCharacters: async () =>{            
            setLoading(true);
            const uriPaginated = `${URI}/page${page}&limit${limit}`
            const dataReponse = await fetchData(uriPaginated);

            setLoading(false);
            setCharacters(dataReponse.results);

            //console.log(dataReponse);
        },
        loadMoreCharacters: async () =>{
            const newPage = (page + 1);

            setLoading(true);
            setPage(newPage);

            const uriPaginated = `${URI}/page${newPage}&limit${limit}`
            const dataReponse = await fetchData(uriPaginated);
            const assignCharacters = characters.concat(dataReponse.results);
                       
            setLoading(false);
            setCharacters(assignCharacters);
        },
        listCharacters: async () => {
            setLoading(true);

            const dataReponse = await fetchData(URI);
            console.log(dataReponse)
        },
        onHandleFavorite: async (idCharacter, like) => {            
            const charactersFilter = Object.values(characters).filter(character => {
                if (character.id == idCharacter) {    
                    character.like = !like                
                    character.likes = !like ? (character.likes + 1) : (character.likes - 1)
                }
                return character
            });

            setCharacters(charactersFilter);
        }
    }
    return (
        <CharacterContext.Provider value = {value}>
            {children}
        </CharacterContext.Provider>
    )
}


export default {
    Provider,
    Consumer: CharacterContext.Consumer
}