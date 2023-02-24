import React from 'react';
import "../home/Home.css"
import Scoil from './Scoil';
import Data from './Data'
import Scroldown from './Scroldown';

const Home = () => {
    return (
        <section className='home section' id='home'>
        <div className="home_container container gird">
            <div className="home_content grid">
                <Scoil/>
                <div className="home_img"></div>
                <Data/>
            </div>
            <Scroldown/>
        </div>
       
        </section>
    );
};

export default Home;