import React from 'react';
// import { Link } from 'react-router-dom';
import '../../assets/css/bottomnav.css';

class BottomNav extends React.Component {

  render() {
    return (

      <div className="d-flex justify-content-between align-items-center ads_advert">
        <div className="d-flex justify-content-between align-items-center m-auto">
          
          <div className="text-center">
            <p className="m-0 ads_link">30 DAY GUARANTEE, FREE RETURNS</p>
            <p className="m-0 text-primary">No hustle, No fuss</p>
          </div>

          <div className="ads_divider"></div>

          <div className="text-center">
            <p className="m-0 ads_link">SECURE PAYMENT</p>
            <p className="m-0 text-primary">On all orders</p>
          </div>

          <div className="ads_divider"></div>

          <div className="text-center">
            <p className="m-0 ads_link">30% OFF EVERYTHING ONLINE HERE</p>
            <p className="m-0 text-primary">Use code verification</p>
          </div>
          
        </div>
      </div>
    )
  }
}

export default BottomNav;
