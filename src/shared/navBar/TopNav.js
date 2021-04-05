import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/topnav.css';
import phone from '../../assets/images/icons/phone.svg';
import ugflag from '../../assets/images/icons/ugflag.svg';

class TopNav extends React.Component {

  render() {
    return (

      <div className="d-flex justify-content-between align-items-center links_advert">
        <div className="d-flex justify-content-between align-items-center lefter">
          <Link to="/">Contact Us</Link>
          <div className="divider"></div>
          <Link to="/">Reviews</Link>
          <div className="divider"></div>
          <Link to="/">Return Policy</Link>
          <div className="divider"></div>
          <Link to="/auth/sign_up">Sign Up</Link>
        </div>

        <div className="d-flex justify-content-between align-items-center righter">
          <img src={phone} alt="logo" classNameName="top_right_links_icons" />
          <Link to="/" className="policy_link">+256 755 000000</Link>
          <div className="divider"></div>
          <Link to="/" className="policy_link">English</Link>
          <div className="divider"></div>
          <img src={ugflag} alt="logo" classNameName="top_right_links_icons" />
          <Link to="/" className="policy_link">Uganda</Link>
        </div>
      </div>
    )
  }
}

export default TopNav;
