import React from 'react';
import '../../assets/css/banner.css';

import free from '../../assets/images/banner/free.svg';
import save from '../../assets/images/banner/save.svg';
import delivery from '../../assets/images/banner/delivery.svg';
import cash from '../../assets/images/banner/cash.svg';

class Banner extends React.Component {

  render() {
    return (
      <div className="d-flex justify-content-between align-items-center banner">
        <div className="d-flex">
          <img src={free} alt="" className="mr-5" />
          <div className="descript">
            <p className="bold_text">Free Shipping</p>
            <p className="text-muted">Just a few cents in your<br />
            pocket for the delivery...</p>
          </div>
        </div>

        <div className="banner_divider"></div>

        <div className="d-flex">
          <img src={save} alt="" className="" />
          <div className="descript">
            <p className="bold_text">Saving More</p>
            <p className="text-muted">Cant get it wrong when<br />
            you want more...</p>
          </div>
        </div>

        <div className="banner_divider"></div>

        <div className="d-flex">
          <img src={delivery} alt="" className="" />
          <div className="descript">
            <p className="bold_text">Quick Delivery</p>
            <p className="text-muted">2 -3 days at your door...<br />
            just reaching you quick...</p>
          </div>
        </div>

        <div className="banner_divider"></div>

        <div className="d-flex">
          <img src={cash} alt="" className="" />
          <div className="descript">
            <p className="bold_text">Money's Worth</p>
            <p className="text-muted">What you ask for is what<br />
            you get, what we give......</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Banner;
