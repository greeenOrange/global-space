import React from 'react';
import DiscoverSpace from '../DiscoverSpace/DiscoverSpace';
import HeroSection from '../HeroSection/HeroSection';
import SearchSpace from '../SearchSpace/SearchSpace';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <DiscoverSpace></DiscoverSpace>
            <SearchSpace></SearchSpace>
        </div>

    );
};

export default Home;