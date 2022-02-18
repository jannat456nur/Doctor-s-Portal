import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { white } from '@mui/material/colors';



const Contact = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container fixed>
                <Grid container spacing={2} >
                    <Grid item xs={4} sx={{ bgcolor: 'info.main' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <AccessTimeIcon sx={{ fontSize: 90, color: "white" }} />
                                </Grid>
                                <Grid item xs={8} sx={{ color: "white" }}>
                                    <h4>Opening Hours</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt veritatis ut </p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ bgcolor: 'text.secondary' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <LocationOnIcon sx={{ fontSize: 90, color: "white" }} />
                                </Grid>
                                <Grid item xs={8} sx={{ color: "white" }}>
                                    <h4>Visit Our Location</h4>
                                    <p>Brokklyne,NY10036,United States</p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ bgcolor: 'info.main' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <LocalPhoneIcon sx={{ fontSize: 90, color: "white" }} />
                                </Grid>
                                <Grid item xs={8} sx={{ color: "white" }}>
                                    <h4>Contact us Now</h4>
                                    <p>+0006348543756</p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;