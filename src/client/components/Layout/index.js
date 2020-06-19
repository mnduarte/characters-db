import React, { Fragment } from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'

import { StContainer } from './styles'

export const Layout = ({children}) => (
    <Fragment>
        <Header/>
            <StContainer>
                {children}
            </StContainer>
        <Footer />
    </Fragment>
)