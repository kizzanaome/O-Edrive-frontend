import React from 'react';
import Header from '../../shared/header/Header';
import Body from '../../components/body/Body';
import Footer from '../../shared/footer/Footer';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default HomePage;
