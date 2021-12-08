import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoimentBanner from '../AppoimentBanner/AppoimentBanner';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <AppoimentBanner />
        </div>
    );
};

export default Home;