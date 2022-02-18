import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


const Banner = () => {
    // const bannerBg = {
    //     background: `url(${bg})`,
    // }
    const verticalCenter = {
        display: 'flex',
        alignments: 'center',
        height: 300,
        border: '1px solid red'
    }
    return (
        <div style={{

            backgroundImage: `url(${bg})`

        }}>
            <Box sx={{ flexGrow: 1 }}>
                <Container fixed>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Typography variant='h3' style={{ color: 'black', fontWeight: 500 }} sx={{ textAlign: 'left' }}>
                                Your new  Smile  <br></br> starts  here
                            </Typography>

                            <Typography sx={{ my: 5, textAlign: 'left' }} style={{ color: 'gray' }}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet dolor quasi iste adipisci neque, perferendis temporibus amet inventore blanditiis, cupiditate quas sapiente tempore ea mollitia libero harum. Eius, possimus?</p>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7} style={{ width: '300px' }} style={verticalCenter}>
                            <img src={chair} alt="" />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Banner;