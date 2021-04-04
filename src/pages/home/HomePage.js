import React from 'react';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import Body from '../../components/body/text/Body';
import TopNav from '../../shared/topNav/TopNav';
import BottomNav from '../../shared/bottomNav/BottomNav';

const HomePage = () => (
  <div>
    {/* <div class="main-content">

      <div class="page-content">
        <div class="container-fluid"> */}
    <TopNav />
    <Header />
    <BottomNav />
    <Body />
    <Footer />
    {/* </div>
      </div>
    </div> */}
  </div>
);

export default HomePage;
