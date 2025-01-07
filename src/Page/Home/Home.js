import React from 'react';
import DiscoverSpace from '../DiscoverSpace/DiscoverSpace';
import HeroSection from '../HeroSection/HeroSection';
import Rockets from '../Rockets/Rockets';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <DiscoverSpace></DiscoverSpace>
            <Rockets></Rockets>
        </div>

    );
};

export default Home;