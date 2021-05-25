import React from 'react';
import Brands from '../Brands/Brands';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HotOffers from '../HotOffers/HotOffers';
import Newsletter from '../Newsletter/Newsletter';
import Slider from '../Slider/Slider';
import TopProduct from '../TopProduct/TopProduct';

const Home = () => {
    let screenWidth = window.innerWidth;
    
    return (
        <>
            <Header/>
            <Slider/>
            <Brands/>
            {
                screenWidth >= 300 && <HotOffers/>
            }
            <TopProduct/>
            <Newsletter/>
            <Footer/>
        </>
    );
};

export default Home;