import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
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
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h4' style={{ color: 'gray', fontWeight: 300 }}>
                            Your new  Smile <br></br> start will here
                        </Typography>

                        <Typography variant='h6' sx={{ my: 5 }} style={{ color: 'gray', fontWeight: 300 }}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet dolor quasi iste adipisci neque, perferendis temporibus amet inventore blanditiis, cupiditate quas sapiente tempore ea mollitia libero harum. Eius, possimus?</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7} style={{ width: '300px' }} style={verticalCenter}>
                        <img src={chair} alt="" />
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default Banner;