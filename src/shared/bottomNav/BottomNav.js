import React from 'react';
// import { Link } from 'react-router-dom';
import './bottomnav.css';

class BottomNav extends React.Component {

  render() {
    return (

      <div class="ads_advert">
        <div class="top_links">
          
          <div class="ads">
            <p class="ads_link">30 DAY GUARANTEE, FREE RETURNS</p>
            <p class="ads_sub_link">No hustle, No fuss</p>
          </div>
          <div class="ads_divider"></div>
          <div class="ads">
            <p class="ads_link">SECURE PAYMENT</p>
            <p class="ads_sub_link">On all orders</p>
          </div>
          <div class="ads_divider"></div>
          <div class="ads">
            <p class="ads_link">30% OFF EVERYTHING ONLINE HERE</p>
            <p class="ads_sub_link">Use code verification</p>
          </div>
          
        </div>
      </div>
    )
  }
}

export default BottomNav;
