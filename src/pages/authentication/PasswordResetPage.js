import React from 'react';
import Header from '../../shared/header/Header';
// import Footer from '../../shared/footer/Footer';
// import Body from '../../components/body/Body';
import TopNav from '../../shared/topNav/TopNav';
import BottomNav from '../../shared/bottomNav/BottomNav';
import SignUp from '../../components/authentication/SignUp';
import PasswordReset from '../../components/authentication/PasswordReset';

const SignUpPage = () => (
  <div>
    <TopNav />
    <Header />
    <BottomNav />
    <PasswordReset />
    {/* <Footer /> */}
  </div>
);

export default SignUpPage;
