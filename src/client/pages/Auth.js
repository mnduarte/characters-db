import React from 'react'
import { AuthUser } from '../container/AuthUser'

export const Auth = ({action}) =>(
    <AuthUser 
        action = {action}
    />    
)