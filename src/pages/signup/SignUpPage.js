import React from 'react';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import Body from '../../components/body/Body';
import TopNav from '../../shared/topNav/TopNav';
import BottomNav from '../../shared/bottomNav/BottomNav';
import SignUp from '../../components/signup/SignUp';

const SignUpPage = () => (
  <div>
    <TopNav />
    <Header />
    <BottomNav />
    <SignUp />
    <Footer />
  </div>
);

export default SignUpPage;
