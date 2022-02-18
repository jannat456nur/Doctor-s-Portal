import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { registerUser, isLoading, user } = useAuth()
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[feild] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
        console.log(feild, value);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password didnt match');
            return;
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    <Typography variant="h6" varient="contained" gutterBottom>
                        Register
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="email"
                            label="Your mail "
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            type="password"
                            id="standard-basic"
                            label=" Retype Your pass "
                            variant="standard"
                            onChange={handleOnChange}
                        />

                        <NavLink
                            to="/login"
                            style={{ textDecortion: 'none' }}

                        >
                            <Button variant="text"> Already have an account?Please login</Button>
                        </NavLink>
                        <Button
                            type='submit'
                            varient="contained"
                            sx={{ width: '75%', m: 1 }}
                        >Submit</Button>
                    </form>
                    {/* {isLoading && <CircularProgress></CircularProgress>} */}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} sx={{ width: 1, m: 1 }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;