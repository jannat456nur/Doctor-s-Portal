import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../../images/doctor.png';
import bg from '../../../../images/bg.png';
import { Button, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(97, 96, 106 ,0.8 )',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                    <img style={{ width: 400, marginTop: '-120px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'left'
                    }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: 'rgba(38, 218, 199)', fontWeight: 700 }}>
                            Appointment
                        </Typography>

                        <Typography variant='h4' style={{ color: 'white', fontWeight: 300 }}>
                            Make an Appointment Today
                        </Typography>

                        <Typography variant='h6' sx={{ my: 5 }} style={{ color: 'white', fontWeight: 300 }}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet dolor quasi iste adipisci neque, perferendis temporibus amet inventore blanditiis, cupiditate quas sapiente tempore ea mollitia libero harum. Eius, possimus?</p>
                        </Typography>
                        <Typography variant='h6'>
                            <Button variant="contained" style={{ backgroundColor: 'rgba(38, 218, 199)' }}>Learn More</Button>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;