import React from 'react';

import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import TopNav from '../../shared/navBar/TopNav';
import BottomNav from '../../shared/navBar/BottomNav';

import SliderSection from '../../components/body/SliderSection';
import Body from '../../components/body/Body';
import Banner from '../../components/body/Banner';
import TitleSection from '../../components/body/TitleSection';


const HomePage = () => (
  <div>
    <TopNav />
    <Header />
    <BottomNav />
    <SliderSection />
    <Banner />
    <TitleSection />
    <Body />
    <Footer />
  </div>
);

export default HomePage;
