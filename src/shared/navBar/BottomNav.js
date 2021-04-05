import React from 'react';
import '../../assets/css/bottomnav.css';

class BottomNav extends React.Component {

  render() {
    return (

      <div className="d-flex justify-content-between align-items-center mb-3 ads_advert">
        <div className="d-flex justify-content-between align-items-center m-auto">
          
          <div className="text-center">
            <p className="bold_text">30 DAY GUARANTEE, FREE RETURNS</p>
            <p className="text-primary">No hustle, No fuss</p>
          </div>

          <div className="ads_divider"></div>

          <div className="text-center">
            <p className="bold_text">SECURE PAYMENT</p>
            <p className="text-primary">On all orders</p>
          </div>

          <div className="ads_divider"></div>

          <div className="text-center">
            <p className="bold_text">30% OFF EVERYTHING ONLINE HERE</p>
            <p className="text-primary">Use code verification</p>
          </div>
          
        </div>
      </div>
    )
  }
}

export default BottomNav;
