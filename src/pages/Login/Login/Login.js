import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[feild] = value;

        setLoginData(newLoginData);
        console.log(feild, value);
    }
    const handleLoginSubmit = e => {

        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    <Typography variant="h6" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your mail "
                            type="email"
                            variant="standard"
                            onChange={handleOnChange}
                        />
                        <br></br>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            type="password"
                            id="standard-basic"
                            label="Your pass "
                            variant="standard"
                            onChange={handleOnChange}
                        />
                        <NavLink
                            to="/register"
                            style={{ textDecortion: 'none' }}

                        >
                            <Button variant="text">New User?Please Register</Button>
                        </NavLink>
                        <Button
                            type='submit'
                            varient="contained"
                            sx={{ width: '75%', m: 1 }}
                        >Submit</Button>
                    </form>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} sx={{ width: 1, m: 1 }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;