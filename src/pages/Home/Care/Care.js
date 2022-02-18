import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import treatment from '../../../images/treatment.png'
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

const Care = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container fixed>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Typography variant='h3' sx={{ my: 5 }}>
                                <img style={{ width: '75%' }} src={treatment} alt="" />
                            </Typography>


                        </Grid>
                        <Grid item xs={12} md={7} style={{ width: '300px' }} sx={{ my: 5, textAlign: 'left' }}>
                            <h1>Experimental Dental Care,<br></br>On Your terms </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nisi unde exercitationem velit sunt cum accusantium non laboriosam labore explicabo quae blanditiis nobis nostrum itaque officiis, repellendus error eum illo porro eaque aperiam. Ullam aliquid nihil inventore explicabo consequuntur obcaecati libero ad laborum? Delectus odio assumenda provident, fuga magnam ut iure facere hic vel officia aut sed unde quo, nostrum itaque possimus vero! Earum necessitatibus veniam laboriosam, ullam saepe dicta.</p>
                            <Button variant="contained" style={{ backgroundColor: 'rgba(38, 218, 199)' }}>Learn More</Button>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Care;