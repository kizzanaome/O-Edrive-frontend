import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../responsiveNav/FooterNav';
import you from '../../assets/images/icons/youtube.png'
import insta from '../../assets/images/icons/insta.png'
import face from '../../assets/images/icons/face.png'
// import associate from '../../assets/images/association.png'
// import asso from '../../assets/images/images/asso.png'
import tweet from '../../assets/images/icons/twitter.png'
import ioni from '../../assets/images/icons/email.png'
import './footer.css'

import logo from '../../assets/logos/logo.svg';


class Footer extends React.Component {

  render() {
    return (
      <div className='footer'>
        <div className='content'>
          <div className='first'>
            <h3>About Us</h3>
            <p>Nile Safari Lodge is a family project that aspires to offer the most environmental friendly eco-lodge in Uganda while providing our guests with outstanding hospitality and adventures.</p>
            <div className='icons'>
              <img src={you} className='footer__icon' alt='youtube' />
              <img src={insta} className='footer__icon' alt='instagram' />
              <img src={face} className='footer__icon' alt='facebook' />
              <img src={tweet} className='footer__icon' alt="twitter" />
            </div>
          </div>
          <div className='second'>
            <h3>Quick Links</h3>
            <FooterNav>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
              <Link to="/activities" onClick={() => window.scrollTo(0, 0)}>Activities</Link>
              <Link to="/accommodate" onClick={() => window.scrollTo(0, 0)}>Accommodation</Link>
              <Link to="/facilities" onClick={() => window.scrollTo(0, 0)}>Facilities</Link>
              <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>Gallery</Link>
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}><img className="logo" src={logo} alt="logo" /></Link>
            </FooterNav>
          </div>
          <div className='third'>
            <h3>Members of:</h3>
            <div className='icons'>
              {/* <img src={asso} className='footer__image' alt='youtube' />
              <img src={asso} className='footer__image' alt='instagram' /> */}
              <img src={face} className='footer__image' alt='facebook' />
            </div>
            <p>Nile Safari Lodge requires your feedback so help us by signing up for the newsletter</p>
            <form action="/action_page.php">
              <div className="input-container">
                <img src={ioni} alt='email' className="icon"></img>
                <input className="input-field" type="text" placeholder="Email" name="email" />
              </div>
            </form>
          </div>
        </div>
        <div className='copyright'>
          <p>@2020 Nile Safari Lodge. All rights reserved <br />Designed by dagartstudios.</p>
        </div>
      </div>
    )
  }

}

export default Footer;
