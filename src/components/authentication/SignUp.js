import React from 'react';
import $ from 'jquery';
// import 'bootstrap';

import signupimg from '../../assets/images/buyer-signup/signup-images.svg';
import user from '../../assets/images/icons/user.svg';
import email from '../../assets/images/icons/email.svg';
import password from '../../assets/images/icons/password.svg';
import phone from '../../assets/images/icons/phone.svg';
import { Link } from 'react-router-dom';
import PopLogin from '../common/PopLogin';

// import './signup.css'


class SignUp extends React.Component {

  state = {
    modal: false,
    loginView: false
  }

  onClickLogin = () => {
    this.setState({
      loginView: false
    }, () => {

      this.setState({
        loginView: <PopLogin />
      }, () => {
        console.log('three is the number');
        $("#staticBackdrop").modal('show');
      })
    })

  }

  render() {
    return (
      <>

        <div className="container">
          <div className="row">

            <div className="col-12 d-flex align-items-center justify-content-between">

              <img src={signupimg} alt="" className="auth-img" />

              <div className="card no-shadow">

                <div className="card-body">

                  <div className="text-center">
                    <h4 className="auth-head mb-3">Sign Up to OikoExpress</h4>
                    <p className="text-muted">Your first step to joining the largest online shop
                  and your own pocket savings help...</p>
                  </div>


                  <div className="">

                    <form action="index.html">

                      <div className="">
                        <label className="form-label text-primary" for="formname">Account :</label>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">First Name</label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <img src={user} alt="" className="" />
                              </div>
                              <input type="text" className="form-control" id="specificSizeInputGroupUsername"
                                placeholder="First Name" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Last Name</label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <img src={user} alt="" className="" />
                              </div>
                              <input type="text" className="form-control" id="specificSizeInputGroupUsername"
                                placeholder="Last Name" />
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="mb-3">
                        <label className="visually-hidden" for="specificSizeInputGroupUsername">Email Address</label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <img src={email} alt="" className="" />
                          </div>
                          <input type="text" className="form-control" id="specificSizeInputGroupUsername"
                            placeholder="Email Address" />
                        </div>
                      </div>


                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Password</label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <img src={password} alt="" className="" />
                              </div>
                              <input type="text" className="form-control" id="specificSizeInputGroupUsername"
                                placeholder="Password" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Re-Enter Password</label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <img src={password} alt="" className="" />
                              </div>
                              <input type="text" className="form-control" id="specificSizeInputGroupUsername"
                                placeholder="Re-Enter Password" />
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="mb-4">
                        <label className="visually-hidden" for="specificSizeInputGroupUsername">Phone Number</label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <img src={phone} alt="" className="" />
                          </div>
                          <input type="text" className="form-control" id="specificSizeInputGroupUsername"
                            placeholder="Phone Number" />
                        </div>
                      </div>


                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="">
                            <label className="form-label text-primary" for="formname">Trade Role :</label>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check form-check-right">
                                <input className="form-check-input" type="radio" name="formRadiosRight" id="formRadiosRight1"
                                  checked />
                                <label className="form-check-label" for="formRadiosRight1">
                                  Buyer
                            </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="formRadios" id="formRadios1" checked />
                                <label className="form-check-label" for="formRadios1">
                                  Seller
                            </label>
                              </div>
                            </div>
                          </div>

                        </div>


                        <div className="col-md-6">

                          <div className="">
                            <label className="form-label text-primary" for="formname">Gender :</label>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check form-check-right">
                                <input className="form-check-input" type="radio" name="formRadiosRight" id="formRadiosRight1"
                                  checked />
                                <label className="form-check-label" for="formRadiosRight1">
                                  Male
                            </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="formRadios" id="formRadios1" checked />
                                <label className="form-check-label" for="formRadios1">
                                  Female
                            </label>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="auth-terms-condition-check" />
                        <label className="form-check-label" for="auth-terms-condition-check">I accept <a
                          href="javascript: void(0);" className="text-dark">Terms and
                        Conditions</a></label>
                      </div>



                      <div className="mt-3 text-end">
                        <button className="btn btn-primary w-sm waves-effect waves-light w-100" type="submit">Register</button>
                      </div>

                      <div className="mt-3 text-center">
                        <div className="signin-other-title">
                          <h5 className="font-size-14 mb-3 title">Or you can Sign up using</h5>
                        </div>


                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="javascript:void()" className="social-list-item bg-primary text-white border-primary">
                              <i className="mdi mdi-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="javascript:void()" className="social-list-item bg-info text-white border-info">
                              <i className="mdi mdi-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="javascript:void()" className="social-list-item bg-danger text-white border-danger">
                              <i className="mdi mdi-google"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="javascript:void()" className="social-list-item bg-dark text-white border-dark">
                              <i className="mdi mdi-apple"></i>
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* <!-- Link trigger modal --> */}
                      <div className="mt-3 text-center">
                        <p className="text-muted mb-0">Already have an account ? <a data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop" onClick={() => this.onClickLogin()} className="fw-medium text-primary"> Login</a></p>
                      </div>

                    </form>
                  </div>

                </div>
              </div>

            </div>
          </div>
          {/* <!-- end row --> */}

          {this.state.loginView}

          {/* <!-- staticBackdrop Modal --> */}


          {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">


                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>

                <div className="modal-body">

                  <div className="card no-shadow w-50 m-auto">

                    <div className="card-body p-4">

                      <div className="text-center">
                        <h4 className="auth-head mb-3">Login to OikoExpress</h4>
                        <p className="text-muted mb-0">Don't have an account? Create your <br /><a data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop" className="fw-medium text-primary pointer"> New User Account</a></p>
                      </div>


                      <div className="p-2">

                        <form action="index.html">

                          <div className="">
                            <label className="form-label text-primary" for="formname">Account :</label>
                          </div>


                          <div className="mb-3">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Email Address</label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <img src="assets/images/icons/email.svg" alt="" className="" />
                              </div>
                              <input type="text" className="form-control" id="specificSizeInputGroupUsername"
                                placeholder="Email Address" />
                            </div>
                          </div>


                          <div className="mb-4">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Password</label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <img src={password} alt="" className="" />
                              </div>
                              <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Password" />
                            </div>
                          </div>


                          <div className="row mb-3">
                            <div className="col-md-6">

                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="auth-terms-condition-check" />
                                <label className="form-check-label" for="auth-terms-condition-check">Remember Me</label>
                              </div>

                            </div>

                            <div className="col-md-6 float-end">
                              <div className="">
                                <Link to="/password_reset" onClick={() => window.scrollTo(0, 0)}>Forgot password?</Link>
                              </div>
                            </div>

                          </div>



                          <div className="mt-3 text-end">
                            <button className="btn btn-primary w-sm waves-effect waves-light w-100" type="submit"
                              data-bs-dismiss="modal">Login</button>
                          </div>

                          <div className="mt-3 text-center">
                            <div className="signin-other-title">
                              <h5 className="font-size-14 mb-3 title">Or you can Login using</h5>
                            </div>


                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a href="javascript:void()" className="social-list-item bg-primary text-white border-primary">
                                  <i className="mdi mdi-facebook"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="javascript:void()" className="social-list-item bg-info text-white border-info">
                                  <i className="mdi mdi-twitter"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="javascript:void()" className="social-list-item bg-danger text-white border-danger">
                                  <i className="mdi mdi-google"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="javascript:void()" className="social-list-item bg-dark text-white border-dark">
                                  <i className="mdi mdi-apple"></i>
                                </a>
                              </li>
                            </ul>
                          </div>

                        </form>
                      </div>

                    </div>
                  </div>


                </div>


              </div>
            </div>

          </div> */}

        </div>
        {/* <!-- end container --> */}
        {/* // </div> */}

        {/* <!-- JAVASCRIPT --> */}
        {/* <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>
        <script src="assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
        <script src="assets/libs/jquery.counterup/jquery.counterup.min.js"></script>

        <script src="assets/js/app.js"></script> */}

        {/* // </body> */}
      </>
    )
  }

}

export default SignUp;
