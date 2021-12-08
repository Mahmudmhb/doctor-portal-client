import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, signInGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChage = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData)
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInGoogle((location, history))
    }
    return (
        <div>
            <Navigation />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom component="div">Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnChage}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChage}
                                variant="standard"
                            />
                            <Button onClick={loginUser} sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Login</Button>

                            {isLoading && <CircularProgress />
                            }
                            {user?.email && <Alert severity="success">User successfully LOgin — check it out!</Alert>
                            }

                        </form>
                        <NavLink to="/ragister">
                            <Button variant="text">New User? Please Ragister</Button>
                        </NavLink>
                        <p>-------------------------</p>
                        <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Login;