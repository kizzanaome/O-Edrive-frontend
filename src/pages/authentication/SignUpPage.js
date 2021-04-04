import React from 'react';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
// import Body from '../../components/body/Body';
import TopNav from '../../shared/topNav/TopNav';
import BottomNav from '../../shared/bottomNav/BottomNav';
import SignUp from '../../components/authentication/SignUp';

class SignUpPage extends React.Component {

  render() {
    return (
      // <body class="auth-body">

<div class="auth-body h-100 pt-sm-5 my-5">
        {/* <TopNav />
        <Header />
        <BottomNav /> */}
        <SignUp />
        {/* <Footer /> */}
      </div>
      // </body>
    )
  }

}

export default SignUpPage;
