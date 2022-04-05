import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import DiscoverSpace from '../DiscoverSpace/DiscoverSpace';
import HeroSection from '../HeroSection/HeroSection';
import SearchSpace from '../SearchSpace/SearchSpace';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <DiscoverSpace></DiscoverSpace>
            <SearchSpace></SearchSpace>
            <Footer></Footer>
        </div>

    );
};

export default Home;