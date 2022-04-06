import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import DiscoverSpace from '../DiscoverSpace/DiscoverSpace';
import HeroSection from '../HeroSection/HeroSection';
import Rockets from '../Rockets/Rockets';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <DiscoverSpace></DiscoverSpace>
            <Rockets></Rockets>
            <Footer></Footer>
        </div>

    );
};

export default Home;