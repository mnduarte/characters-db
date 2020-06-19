import React from 'react';
import {Box, Button, TextField, Container, InputAdornment, CircularProgress, FormHelperText} from '@material-ui/core';
import {Face, Email, Lock} from "@material-ui/icons";
import {Paper, Form, BSign} from './styles'
import {useInputValue} from '../../hooks/useInputValue'

export const FormUser = ({action, onSubmit}) => {
    const fullname = useInputValue()
    const username = useInputValue()
    const password = useInputValue()

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            fullname: fullname.value,
            username: username.value,
            password: password.value
        })

        fullname.onChange();
        username.onChange();
        password.onChange();
    }

    return(
        <Container component="main" maxWidth="xs">
                    <Paper>
                        <Form noValidate>
                            {
                                action !== 'login' &&
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Full Name"
                                    name="fullname"
                                    autoComplete="fullname"
                                    autoFocus                        
                                    InputProps={{
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <Face />
                                        </InputAdornment>
                                        ),
                                    }}
                                    {...fullname}
                                />
                            }
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus                        
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <Email />
                                    </InputAdornment>
                                    ),
                                }}
                                {...username}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"             
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <Lock />
                                    </InputAdornment>
                                    ),
                                }}
                                {...password}
                            />
                            <Box m="1.5rem">
                                <BSign 
                                    fullWidth
                                    onClick={handleSubmit}                        
                                >  
                                   {action == 'login' ? 'Ingresar' : 'Registrarse'}
                                </BSign>
                            </Box>
                        </Form>
                    </Paper>
                    </Container>
    )
}