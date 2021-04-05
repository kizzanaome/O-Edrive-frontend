import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/topnav.css';
import phone from '../../assets/images/icons/phone.svg';
import ugflag from '../../assets/images/icons/ugflag.svg';

class TopNav extends React.Component {

  render() {
    return (

      <div className="d-flex justify-content-between align-items-center links_advert mx-auto">
        <div className="d-flex justify-content-between align-items-center lefter">
          <Link to="/">Contact Us</Link>

          <div className="divider"></div>

          <Link to="/">Reviews</Link>

          <div className="divider"></div>

          <Link to="/">Return Policy</Link>

          <div className="divider"></div>

          <Link to="/">FAQs</Link>

          <div className="divider"></div>

          <Link to="/auth/sign_up">Sign Up</Link>
        </div>

        <div className="d-flex justify-content-between align-items-center righter">
          <Link to="/"><i class="fas fa-phone-alt"></i>    +256 755 000000</Link>

          <div className="divider"></div>

          <div className="">
            <Link to="/" className="left_link">English </Link>
            <i class="fas fa-caret-down"></i>
          </div>

          <div className="divider"></div>

          <div className="">
            {/* <img src={ugflag} alt="logo" className="top_right_links_icons" /> */}
            <Link to="/" className="left_link">USD </Link>
            <i class="fas fa-caret-down"></i>
          </div>

          <div className="divider"></div>

          {/* dropdown */}
          <div class="dropdown d-inline-block">
            <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {/* <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-4.jpg"
                alt="Header Avatar" /> */}
              <span class="d-none d-xl-inline-block ms-1 fw-medium font-size-15">Marcus</span>
              <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              {/* <!-- item--> */}
              <a class="dropdown-item" href="#"><i class="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i> <span class="align-middle">View Profile</span></a>
              <a class="dropdown-item" href="#"><i class="uil uil-wallet font-size-18 align-middle me-1 text-muted"></i> <span class="align-middle">My Wallet</span></a>
              <a class="dropdown-item d-block" href="#"><i class="uil uil-cog font-size-18 align-middle me-1 text-muted"></i> <span class="align-middle">Settings</span> <span class="badge bg-soft-success rounded-pill mt-1 ms-2">03</span></a>
              <a class="dropdown-item" href="#"><i class="uil uil-lock-alt font-size-18 align-middle me-1 text-muted"></i> <span class="align-middle">Lock screen</span></a>
              <a class="dropdown-item" href="#"><i class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i> <span class="align-middle">Sign out</span></a>
            </div>
          </div>

          <div className="divider"></div>

          <div className="">
            <img src={ugflag} alt="logo" className="top_right_links_icons" />
            <Link to="/" className="left_link">Uganda </Link>
            <i class="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNav;
