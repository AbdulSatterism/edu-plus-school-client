import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import HomeEvent from '../HomeEvent/HomeEvent';
import News from '../FeatureNews/News';

import Notices from '../Notice/Notices';

import NewEvents from '../UpcomingEvent/NewEvents';
import Faculties from '../Faculty/Faculties';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomeEvent></HomeEvent>
            <News></News>
            <NewEvents></NewEvents>
            <Notices></Notices>
            <Faculties></Faculties>

        </div>
    );
};

export default Home;