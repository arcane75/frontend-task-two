import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Explore from '../Explore/Explore';
import Slider from '../Slider/Slider';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Explore/>
            <Footer />
        </div>
    );
};

export default HomePage;