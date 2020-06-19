import React, { Fragment, useState, useContext, Suspense } from 'react';

import { GlobalStyle, Img } from './styles/GlobalStyles';
//import img from './assets/images/background.png';

import { CssBaseline, Button} from '@material-ui/core';

import { Router }  from '@reach/router'
import { Home } from './pages/Home.js'

import { Layout } from './components/Layout'

import { MoveContext } from './context/MoveContext'
import { Auth } from './pages/Auth';

export const App = () => { 
  const {up} = useContext(MoveContext);

  return(
    <Fragment>
        <CssBaseline/>
        <GlobalStyle
          up={up} 
        />
        <Layout>
            <Router>
                <Home path='/' />
                <Auth path='/auth/:action'/>
            </Router>
        </Layout>
    </Fragment>
  )
}