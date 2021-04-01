import React from 'react';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import Body from '../../components/body/Body';
import TopNav from '../../shared/topNav/TopNav';
import BottomNav from '../../shared/bottomNav/BottomNav';

const HomePage = () => (
  <div>
    <TopNav />
    <Header />
    <BottomNav />
    <Body />
    <Footer />
  </div>
);

export default HomePage;
