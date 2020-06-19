import React, {Fragment, useContext} from 'react';
import { ListCharacters } from '../container/ListCharacters';
import { Loading } from '../components/Loading';
import { CharacterContext } from '../context/CharacterContext';

export const Home = () => {    
    const { loading } = useContext(CharacterContext);

    return(
        <Fragment>
            <ListCharacters />
            {loading && <Loading />}
        </Fragment>
    )
}