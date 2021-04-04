import React from 'react';
import { Link } from 'react-router-dom';

import email from '../../assets/images/icons/email.svg';
import password from '../../assets/images/icons/password.svg';

// import ajax from '../../utils/ajax';
// import dictionary from '../../utils/dictionary';
// import ActivityLoader from './ActivityLoader';
// import AlertError from './AlertError';
// import TextInput from './TextInput';

class PopLogin extends React.Component {

  // state = {
  //   amount: '',
  //   info: '',
  //   searchList: false,
  //   buttonLabel: this.props.buttonLabel || "Confirm Amount",
  //   loading: false
  // }

  // onChangeAmount = (event) => {
  //   this.setState({ amount: event.target.value });
  // }

  // onConfirm = (event) => {
  //   event.preventDefault();
  //   if (this.state.amount.length > 0) {
  //     this.setState({
  //       loading: true
  //     })
  //     this.props.onConfirm(this.state.amount);
  //   } else {
  //     this.setState({
  //       info: <AlertError message={dictionary._requireAmount} />
  //     })
  //   }
  // }



  render() {
    return (
      // <div className="modal" id="modal_amount_input">
      //     <div className="modal-dialog modal-dialog-centered" role="document">


      //         <div className="modal-content modal-content-demo shadow">
      //             <div className="modal-header">
      //                 <h6 className="modal-title">{this.props.title}</h6>
      //                 <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
      //             </div>
      //             <div className="modal-body">
      //                 {this.state.info}
      //                 <form method="post" onSubmit={this.onConfirm}>

      //                     <TextInput
      //                         label="Enter Amount"
      //                         type="number"
      //                         onChange={() => this.onChangeAmount}
      //                         value={this.state.amount}
      //                     />

      //                 </form>

      //                 {this.props.description}


      //             </div>
      //             <div className="modal-footer">
      //                 {!this.state.loading && <>
      //                     <button className="btn ripple btn-primary" type="button" onClick={this.onConfirm}>{this.state.buttonLabel}</button>
      //                     <button className="btn ripple btn-secondary" type="button" data-dismiss="modal">Close</button>
      //                 </>}

      //                 {this.state.loading && <ActivityLoader />}
      //             </div>
      //         </div>


      //     </div>
      // </div>




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
                            <img src={email} alt="" class="" />
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
                            {/* <a href="auth-recoverpw.html" class="text-muted">Forgot password?</a> */}
                            <Link to="/password_reset" onClick={() => window.scrollTo(0, 0)}>Forgot password?</Link>
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
    )


  }
}

export default PopLogin;
