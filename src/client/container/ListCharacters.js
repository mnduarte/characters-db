import React, {useContext, useEffect, useState, Fragment} from 'react';
import { ContainerCharacter } from '../components/ContainerCharacter';
import { CharacterContext } from '../context/CharacterContext';

export const ListCharacters = () => {
    const { loading, characters, loadMoreCharacters } = useContext(CharacterContext);
    const [ bottom, setBottom ] = useState(false);
    const handleBottom = () => {
        setBottom(false)
        loadMoreCharacters()
    }

    
    useEffect(() => {
        const handleScroll = e => {
            const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const windowBottom = windowHeight + window.pageYOffset;

            windowBottom >= docHeight && setBottom(true)

            /*if (windowBottom >= docHeight) {
                //loadMoreCharacters()
                setBottom(true)
                console.log('ABAJOOOOOO')
            } else {
                console.log('Todabia No')
            }*/
        }
            
        //Asigna el evento Scroll luego lo remueve
        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
      }, [])//Segundo Param evalua loadMoreUsers si cambia ejecuta la funcion anterior


    useEffect(() => {
        bottom && handleBottom()
    }, [bottom]);

    return (
        <Fragment>
            <ContainerCharacter 
                characters={characters}
            />
        </Fragment>
    )
}