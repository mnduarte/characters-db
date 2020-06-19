import React, { Fragment } from 'react';
import { CardCharacter } from '../CardCharacter';
import { Container } from './styles';

export const ContainerCharacter = ({characters}) => {
    const lengthByContainer = 3;
    const splitEvery = (array, length) =>
        array.reduce(
                (result, item, index) => {
                    if ( index % length === 0 ) result.push([])
                        result[Math.floor(index / length)].push(item)
                    return result
                },
                []
            )
    //console.log(splitEvery(characters, 3))
    return(
        <Fragment>
        {
            characters
            ? splitEvery(characters, lengthByContainer).map((charactersSplit, idx) => (
                <Container key={idx}>
                    { charactersSplit.map( character => (
                        <CardCharacter 
                            key={character._id}
                            {...character} 
                        />
                    ))
                    }           
                </Container>
                ))
            : <h2>No hay Personajes</h2>                
        }
        </Fragment>
    )
}