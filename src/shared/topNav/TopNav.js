import React from 'react';
import { Link } from 'react-router-dom';
import './topnav.css';
import phone from '../../assets/images/icons/phone.svg';
import ugflag from '../../assets/images/icons/ugflag.svg';


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

class TopNav extends React.Component {

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
      // <div className={this.state.hideNav ? 'hide header' : ' header show'}>
      //   <div className={this.state.hideNav ? 'cover cover-show' : 'cover cover-hide'}></div>
      //   <div className='nav'>
      //     <Link to="/"><img src={logo} alt="logo" /></Link>

      //     <div className='menu' onClick={this.openNavBar}>
      //       <div className='bar half start'></div>
      //       <div className='bar'></div>
      //       <div className='bar half end'></div>
      //     </div>
      //   </div>

      //   <MobileNav style={this.state.style}>
      //     <button onClick={this.openNavBar} className='close'>&times;</button>

      //     <div className="overlay__links">
      //       <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
      //       <Link to="/">Home</Link>
      //       <Link to="/activities">Activities</Link>
      //       <Link to="/accommodate">Accommodation</Link>
      //       <Link to="/facilities">Facilities</Link>
      //       <Link to="/gallery">Gallery</Link>
      //       <Link to="/about">About</Link>
      //     </div>
      //   </MobileNav>

      //   <script></script>
      // </div>

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
