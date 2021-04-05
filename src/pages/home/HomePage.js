import React from 'react';

import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import TopNav from '../../shared/navBar/TopNav';
import BottomNav from '../../shared/navBar/BottomNav';

import SliderSection from '../../components/body/slider/SliderSection';
import Body from '../../components/body/text/Body';


const HomePage = () => (
  <div>
    {/* <div className="main-content">

      <div className="page-content">
        <div className="container-fluid"> */}
    <TopNav />
    <Header />
    <BottomNav />
    <SliderSection />
    <Body />
    <Footer />
    {/* </div>
      </div>
    </div> */}
  </div>
);

export default HomePage;
