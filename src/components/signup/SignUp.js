import React from 'react';

import signupimg from '../../assets/images/buyer-signup/signup-images.svg';
import user from '../../assets/images/icons/user.svg';
import email from '../../assets/images/icons/email.svg';
import password from '../../assets/images/icons/password.svg';
import phone from '../../assets/images/icons/phone.svg';

import './signup.css'


class SignUp extends React.Component {

  render() {
    return (
      <body class="authentication-bg auth-body">

  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row">

        <div class="col-md-8 col-lg-6 col-xl-12 d-flex align-items-center justify-content-between">

          <img src={signupimg} alt="" class="auth-img" />

          <div class="card no-shadow w-100">

            <div class="card-body p-4">

              <div class="text-center">
                <h4 class="auth-head mb-3">Sign Up to OikoExpress</h4>
                <p class="text-muted">Your first step to joining the largest online shop
                  and your own pocket savings help...</p>
              </div>


              <div class="p-2">

                <form action="index.html">

                  <div class="">
                    <label class="form-label text-primary" for="formname">Account :</label>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-6">
                      <div class="">
                        <label class="visually-hidden" for="specificSizeInputGroupUsername">First Name</label>
                        <div class="input-group">
                          <div class="input-group-text">
                            <img src={user} alt="" class="" />
                          </div>
                          <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                            placeholder="First Name" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="">
                        <label class="visually-hidden" for="specificSizeInputGroupUsername">Last Name</label>
                        <div class="input-group">
                          <div class="input-group-text">
                            <img src={user} alt="" class="" />
                          </div>
                          <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                            placeholder="Last Name" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="mb-3">
                    <label class="visually-hidden" for="specificSizeInputGroupUsername">Email Address</label>
                    <div class="input-group">
                      <div class="input-group-text">
                        <img src={email} alt="" class="" />
                      </div>
                      <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                        placeholder="Email Address" />
                    </div>
                  </div>


                  <div class="row mb-3">
                    <div class="col-md-6">
                      <div class="">
                        <label class="visually-hidden" for="specificSizeInputGroupUsername">Password</label>
                        <div class="input-group">
                          <div class="input-group-text">
                            <img src={password} alt="" class="" />
                          </div>
                          <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                            placeholder="Password" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="">
                        <label class="visually-hidden" for="specificSizeInputGroupUsername">Re-Enter Password</label>
                        <div class="input-group">
                          <div class="input-group-text">
                            <img src={password} alt="" class="" />
                          </div>
                          <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                            placeholder="Re-Enter Password" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="mb-4">
                    <label class="visually-hidden" for="specificSizeInputGroupUsername">Phone Numnber</label>
                    <div class="input-group">
                      <div class="input-group-text">
                        <img src={phone} alt="" class="" />
                      </div>
                      <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                        placeholder="Phone Numnber" />
                    </div>
                  </div>


                  <div class="row mb-3">
                    <div class="col-md-6">
                      <div class="">
                        <label class="form-label text-primary" for="formname">Role :</label>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-check form-check-right">
                            <input class="form-check-input" type="radio" name="formRadiosRight" id="formRadiosRight1"
                              checked />
                            <label class="form-check-label" for="formRadiosRight1">
                              Customer
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="formRadios" id="formRadios1" checked />
                            <label class="form-check-label" for="formRadios1">
                              Seller
                            </label>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div class="col-md-6">

                      <div class="">
                        <label class="form-label text-primary" for="formname">Gender :</label>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-check form-check-right">
                            <input class="form-check-input" type="radio" name="formRadiosRight" id="formRadiosRight1"
                              checked />
                            <label class="form-check-label" for="formRadiosRight1">
                              Male
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="formRadios" id="formRadios1" checked />
                            <label class="form-check-label" for="formRadios1">
                              Female
                            </label>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="auth-terms-condition-check" />
                    <label class="form-check-label" for="auth-terms-condition-check">I accept <a
                        href="javascript: void(0);" class="text-dark">Terms and
                        Conditions</a></label>
                  </div>



                  <div class="mt-3 text-end">
                    <button class="btn btn-primary w-sm waves-effect waves-light w-100" type="submit">Register</button>
                  </div>

                  <div class="mt-3 text-center">
                    <div class="signin-other-title">
                      <h5 class="font-size-14 mb-3 title">Or you can Sign up using</h5>
                    </div>


                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="javascript:void()" class="social-list-item bg-primary text-white border-primary">
                          <i class="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void()" class="social-list-item bg-info text-white border-info">
                          <i class="mdi mdi-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void()" class="social-list-item bg-danger text-white border-danger">
                          <i class="mdi mdi-google"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void()" class="social-list-item bg-dark text-white border-dark">
                          <i class="mdi mdi-apple"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- Link trigger modal --> */}
                  <div class="mt-3 text-center">
                    <p class="text-muted mb-0">Already have an account ? <a data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop" class="fw-medium text-primary pointer"> Login</a></p>
                  </div>
                  
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/* <!-- end row --> */}

      {/* <!-- staticBackdrop Modal --> */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">


            <div class="modal-header">
              {/* <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> --> */}
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>




            <div class="modal-body">


              <div class="card no-shadow w-50 m-auto">

                <div class="card-body p-4">

                  <div class="text-center">
                    <h4 class="auth-head mb-3">Login to OikoExpress</h4>
                    <p class="text-muted mb-0">Don't have an account? Create your <br /><a data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop" class="fw-medium text-primary pointer"> New User Account</a></p>
                  </div>


                  <div class="p-2">

                    <form action="index.html">

                      <div class="">
                        <label class="form-label text-primary" for="formname">Account :</label>
                      </div>


                      <div class="mb-3">
                        <label class="visually-hidden" for="specificSizeInputGroupUsername">Email Address</label>
                        <div class="input-group">
                          <div class="input-group-text">
                            <img src="assets/images/icons/email.svg" alt="" class="" />
                          </div>
                          <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                            placeholder="Email Address" />
                        </div>
                      </div>


                      <div class="mb-4">
                        <label class="visually-hidden" for="specificSizeInputGroupUsername">Password</label>
                        <div class="input-group">
                          <div class="input-group-text">
                            <img src={password} alt="" class="" />
                          </div>
                          <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Password" />
                        </div>
                      </div>


                      <div class="row mb-3">
                        <div class="col-md-6">

                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="auth-terms-condition-check" />
                            <label class="form-check-label" for="auth-terms-condition-check">Remember Me</label>
                          </div>

                        </div>

                        <div class="col-md-6 float-end">
                          <div class="">
                            {/* <!-- <label class="form-label text-primary" for="formname">Forgot password</label> --> */}
                            <a href="auth-recoverpw.html" class="text-muted">Forgot password?</a>
                          </div>
                        </div>

                      </div>



                      <div class="mt-3 text-end">
                        <button class="btn btn-primary w-sm waves-effect waves-light w-100" type="submit"
                          data-bs-dismiss="modal">Login</button>
                      </div>

                      <div class="mt-3 text-center">
                        <div class="signin-other-title">
                          <h5 class="font-size-14 mb-3 title">Or you can Login using</h5>
                        </div>


                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a href="javascript:void()" class="social-list-item bg-primary text-white border-primary">
                              <i class="mdi mdi-facebook"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="javascript:void()" class="social-list-item bg-info text-white border-info">
                              <i class="mdi mdi-twitter"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="javascript:void()" class="social-list-item bg-danger text-white border-danger">
                              <i class="mdi mdi-google"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="javascript:void()" class="social-list-item bg-dark text-white border-dark">
                              <i class="mdi mdi-apple"></i>
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
      </div>

    </div>
    {/* <!-- end container --> */}
  </div>

  {/* <!-- JAVASCRIPT --> */}
  <script src="assets/libs/jquery/jquery.min.js"></script>
  <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/libs/metismenu/metisMenu.min.js"></script>
  <script src="assets/libs/simplebar/simplebar.min.js"></script>
  <script src="assets/libs/node-waves/waves.min.js"></script>
  <script src="assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
  <script src="assets/libs/jquery.counterup/jquery.counterup.min.js"></script>

  <script src="assets/js/app.js"></script>

</body>
    )
  }

}

export default SignUp;
