import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../../images/fluoride.png';
import cavity from '../../../../images/cavity.png';
import whiting from '../../../../images/whitening.png';


const services = [

    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quidem totam minus deserunt cum dicta, voluptatum nam expedita? Soluta quod eum dignissimos earum nesciunt? Consectetur eaque non, dolorum iusto esse nemo similique quae alias voluptas ipsam, qui expedita veniam deserunt?',
        img: fluoride
    },
    {
        name: 'cavity Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quidem totam minus deserunt cum dicta, voluptatum nam expedita? Soluta quod eum dignissimos earum nesciunt? Consectetur eaque non, dolorum iusto esse nemo similique quae alias voluptas ipsam, qui expedita veniam deserunt?',
        img: cavity
    },
    {
        name: 'whiting Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quidem totam minus deserunt cum dicta, voluptatum nam expedita? Soluta quod eum dignissimos earum nesciunt? Consectetur eaque non, dolorum iusto esse nemo similique quae alias voluptas ipsam, qui expedita veniam deserunt?',
        img: whiting
    }


]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h5" component='div'>
                        <h4>   Our Services</h4>
                    </Typography>
                    <Typography variant="h4" component='div'>
                        <h1> Service we provide</h1>
                    </Typography>

                    <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;