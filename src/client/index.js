import React from 'react';
import ReactDOM from 'react-dom';
import MoveContext from './context/MoveContext';
import CharacterContext from './context/CharacterContext';
import UserContext from './context/UserContext';

import {App} from './App';
  
ReactDOM.render(
    <MoveContext.Provider>         
        <CharacterContext.Provider>
            <UserContext.Provider>
                <App />
            </UserContext.Provider>
        </CharacterContext.Provider>      
    </MoveContext.Provider>,
    document.getElementById('app')
)