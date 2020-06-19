import React, {useContext, useEffect} from 'react'
import { navigate } from '@reach/router';
import { FormUser } from '../components/FormUser';
import { UserContext } from '../context/UserContext';

export const AuthUser = ({action}) => {
    const { loading, isAuth, register, login } = useContext(UserContext);
    const handleAuth = (dataUser) => {
        action == 'login' ?  login(dataUser) : register(dataUser)
    }

    useEffect(() => {
        isAuth && navigate('/');
    }, [isAuth]);
    return(
        <FormUser 
            action={action}
            onSubmit={handleAuth}
        />
    )
}