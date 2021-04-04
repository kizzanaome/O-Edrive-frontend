import React from 'react';

// import signupimg from '../../assets/images/buyer-signup/signup-images.svg';
// import user from '../../assets/images/icons/user.svg';
// import email from '../../assets/images/icons/email.svg';
import password from '../../assets/images/icons/password.svg';
// import phone from '../../assets/images/icons/phone.svg';

// import './signup.css'


class PasswordReset extends React.Component {

  render() {
    return (
      <body class="authentication-bg auth-body">

        <div class="account-pages my-5  pt-sm-5">
          <div class="container">
            <div class="row justify-content-center">

              <div class="col-md-8 col-lg-6 col-xl-5">
                <div>

                  <div class="card no-shadow w-100">

                    <div class="card-body p-4">

                      <div class="text-center">
                        <h3 class="auth-head mb-3">Reset Password</h3>
                        <p class="text-muted">Reset Password with Minible.</p>
                      </div>

                      <div class="p-2 mt-4">
                        <div class="alert alert-success text-center mb-4" role="alert">
                          Enter your New password and instructions will be sent to you!
                                        </div>
                        <form action="index.html">

                          <div class="">
                            <label class="form-label text-primary" for="formname">Passwords :</label>
                          </div>

                          <div class="mb-3">
                            <label class="visually-hidden" for="specificSizeInputGroupUsername">Password</label>
                            <div class="input-group">
                              <div class="input-group-text">
                                <img src={password} alt="" class="" />
                              </div>
                              <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                                placeholder="Password" />
                            </div>
                          </div>


                          <div class="mb-3">
                            <label class="visually-hidden" for="specificSizeInputGroupUsername">Re-Enter Password</label>
                            <div class="input-group">
                              <div class="input-group-text">
                                <img src={password} alt="" class="" />
                              </div>
                              <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                                placeholder="Re-Enter Password" />
                            </div>
                          </div>

                          <div class="mt-3 text-end">
                            <button class="btn btn-primary w-sm waves-effect waves-light w-100" type="submit">Reset</button>
                          </div>


                          <div class="mt-4 text-center">
                            <p class="mb-0">Remember It ? <a href="auth-login.html" class="fw-medium text-primary"> Signin </a></p>
                          </div>
                        </form>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* <!-- end row --> */}
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

export default PasswordReset;
