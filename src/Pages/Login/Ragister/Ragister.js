import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/login.png';
import useAuth from "./../../../Hooks/useAuth"


const Ragister = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChage = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData)
        setLoginData(newLoginData)

    }
    const handleRagisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("your password dit not match");

            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();

    }
    return (
        <div>
            <Navigation />
            <Container sx={{ m: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom component="div">RAGISTER</Typography>
                        {!isLoading && <form onSubmit={handleRagisterSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnChage}
                                variant="standard" />
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
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnChage}
                                variant="standard"
                            />
                            <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Ragister</Button>
                            {isLoading && <CircularProgress />
                            }
                            {user?.email && <Alert severity="success">User successfully reagistered — check it out!</Alert>
                            }
                            {authError && <Alert severity="error">Please try Agein— check it out!</Alert>
                            }
                            <NavLink to="/login"><Button variant="text">Already Reagistered? PLease Login</Button></NavLink>
                        </form>}


                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </div >
    );
};

export default Ragister;