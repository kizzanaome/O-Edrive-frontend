import React from 'react';
import '../../assets/css/bottomnav.css';

class BottomNav extends React.Component {

  render() {
    return (

      <div className="d-flex justify-content-between align-items-center mb-3 mx-auto ads_advert">

        <div className="text-center">
          <p className="fw-bolder font-size-17">30 DAY GUARANTEE, FREE RETURNS</p>
          <p className="text-primary">No hustle, No fuss</p>
        </div>

        <div className="ads_divider"></div>

        <div className="text-center">
          <p className="fw-bolder font-size-17">SECURE PAYMENT</p>
          <p className="text-primary">On all orders</p>
        </div>

        <div className="ads_divider"></div>

        <div className="text-center">
          <p className="fw-bolder font-size-17">30% OFF EVERYTHING ONLINE HERE</p>
          <p className="text-primary">Use code verification</p>
        </div>

      </div>
    )
  }
}

export default BottomNav;
