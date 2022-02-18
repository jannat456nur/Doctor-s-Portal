import React from 'react';
import Navigation from '../../../shared/Navigation/Navigation';
import AppointmentBanner from '../../Appointment/AppointmentBanner/AppointmentBanner';
import Banner from '../../Banner/Banner';
import Care from '../../Care/Care';
import Contact from '../../Contact/Contact';
import Services from '../Services/Services';


const Home = () => {

    return (
        <div>

            <Navigation></Navigation>
            <Banner></Banner>
            <Contact></Contact>
            <Services></Services>
            <Care></Care>
            <AppointmentBanner></AppointmentBanner>



        </div>
    );
};

export default Home;