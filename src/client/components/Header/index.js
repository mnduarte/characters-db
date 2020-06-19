import React, {useState, useContext, useEffect, Fragment} from 'react'

import { Link } from '@reach/router'
import { Button, MenuItem, Popper, Fade , Paper} from '@material-ui/core';

import { HeaderMain, HeaderLogo, LogoImg, HeaderAuth, ButtonRegister, ButtonPerfil, PaperPerfilItems } from './styles';
import { MoveContext } from '../../context/MoveContext';
import { CharacterContext } from '../../context/CharacterContext';
import { UserContext } from '../../context/UserContext';
import { MenuUser } from '../MenuUser';


export const Header = () => {
  const urlImgLogo = require(`../../assets/images/logo.png`);
  const { up, handleUp } = useContext(MoveContext);
  const { isAuth, user } = useContext(UserContext);
  const { loading, characters, loadCharacters, loadMoreCharacters } = useContext(CharacterContext);


  useEffect(function () {        
      loadCharacters()
  }, [])
  
  useEffect(function () {
    if (characters && !up) {
      handleUp()
    }
  }, [characters])
    
  return (
    <HeaderMain>
        <HeaderLogo>
          <Link to='/'>
            <LogoImg 
              src={urlImgLogo}
              up={up}
            />
          </Link>
        </HeaderLogo>      
      <HeaderAuth>
        {!isAuth 
        ?<Fragment>          
          <Link to='/auth/login'>
            <Button 
                variant="contained" 
                color="secondary"
              >
                  Ingresar
            </Button>        
          </Link> 
          <Link to='/auth/register'>            
            <ButtonRegister>
                Registrarse
            </ButtonRegister>
          </Link>
        </Fragment>
        : <MenuUser 
            {...user}
          />
        }
      </HeaderAuth>
    </HeaderMain>
  );
}