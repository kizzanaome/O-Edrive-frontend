import React from 'react';
// import { Link } from 'react-router-dom';
import './bottomnav.css';


const style = {
  width: '0',
  height: '100%',
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  backgroundColor: '#000',
  overflowX: 'hidden',
  transition: "all 0.5s ease 0s",
}

class BottomNav extends React.Component {

  showNav = false;
  state = {
    style,
    hideNav: true
  }
  myRef = React.createRef();

  openNavBar = () => {
    this.showNav = !this.showNav;
    this.setState({
      style: {
        width: this.showNav ? '100%' : '0',
        height: '100%',
        position: 'fixed',
        zIindex: 1,
        left: 0,
        top: 0,
        backgroundColor: '#000',
        overflowX: 'hidden',
        transition: "all 0.5s ease 0s",
      },
      showNav: true
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition > 775) {
      this.setState({ hideNav: false });
    } else {
      this.setState({ hideNav: true });
    }
  }

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
