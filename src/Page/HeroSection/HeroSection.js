import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <main>
            <div className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="left-hero mt-5">
                        <div className="welcome-section">
                            <img src="https://i.ibb.co/6Hsq34r/r8-2.png" alt="" />
                            <h5>Welcome to Stella</h5>
                        </div>
                        <h1>Space For Everyone</h1>
                        <p>At Piap space, we belive that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions</p>
                        <button>Get start</button>
                        </div>
                        </div>
                        <div className="col-md-8">
                            <div className="right-hero">
                                <div className="main-globe">
                                    {/* <img src="https://i.ibb.co/rt9pr6n/space-man.png" alt="" /> */}
                                    <img src="https://i.ibb.co/WkzW9ym/r8-1.png" alt="" />
                                </div>
                                <div className="space-man">
                                    <img src="https://i.ibb.co/rt9pr6n/space-man.png" alt="" width="500" height="500" />
                                </div>
                                <div className="earth-globe">
                                    <img src="https://i.ibb.co/qYHSXjK/globe.png" alt="" />
                                </div>
                                <div className="circule-globe">
                                    <img src="https://i.ibb.co/M5pttct/21.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;