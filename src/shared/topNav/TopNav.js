import React from 'react';
import { Link } from 'react-router-dom';
import './topnav.css';
import phone from '../../assets/images/icons/phone.svg';
import ugflag from '../../assets/images/icons/ugflag.svg';

class TopNav extends React.Component {

  render() {
    return (

      <div class="advert">
        <div class="top_left_links">
          <p class="policy_link">Contact Us</p>
          <div class="divider"></div>
          <p class="policy_link">Reviews</p>
          <div class="divider"></div>
          <p class="policy_link">Return Policy</p>
          <div class="divider"></div>
          <p class="policy_link"><Link to="/sign_up">Sign Up</Link></p>
          {/* <div class="divider"></div> */}
          {/* <p>Follow us:</p>
          <div class="top_left_links_icons">
            <Link to="/"><img src={icon1} alt="logo" /></Link>
            
            <Link to="/"><img src={icon2} alt="logo" /></Link>
            
          </div> */}
        </div>

        <div class="top_right_links">
          <img src={phone} alt="logo" className="top_right_links_icons" />
          <p>+256 755 000000</p>
          <div class="divider"></div>
          <p>English</p>
          <div class="divider"></div>
          <img src={ugflag} alt="logo" className="top_right_links_icons" />
          <p>Uganda</p>
        </div>
      </div>
    )
  }
}

export default TopNav;
