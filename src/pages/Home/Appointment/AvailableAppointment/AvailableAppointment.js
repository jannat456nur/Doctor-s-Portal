import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {

    const bookings = [
        {
            id: 1,
            name: 'Oral Surgery',
            time: '07.00 pm -08.00 pm',
            space: 10,
        },
        {
            id: 2,
            name: 'Oral Surgery',
            time: '09.00 pm -10.00 pm',
            space: 10,
        },
        {
            id: 3,
            name: 'Oral Surgery',
            time: '11.00 pm -12.00 pm',
            space: 10,
        },
        {
            id: 4,
            name: 'Oral Surgery',
            time: '13.00 pm -14.00 pm',
            space: 10,
        },
        {
            id: 5,
            name: 'Oral Surgery',
            time: '15.00 pm -16.00 pm',
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '17.00 pm -189.00 pm',
            space: 10,
        }
    ]

    return (
        <Container>
            <Typography varient={6} sx={{ color: 'info.main', fontWeight: 600, py: 5 }} >Available Appointment  [{date.toDateString()}]</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;