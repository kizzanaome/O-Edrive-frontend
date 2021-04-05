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
      // <div classNameName="modal" id="modal_amount_input">
      //     <div classNameName="modal-dialog modal-dialog-centered" role="document">


      //         <div classNameName="modal-content modal-content-demo shadow">
      //             <div classNameName="modal-header">
      //                 <h6 classNameName="modal-title">{this.props.title}</h6>
      //                 <button aria-label="Close" classNameName="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
      //             </div>
      //             <div classNameName="modal-body">
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
      //             <div classNameName="modal-footer">
      //                 {!this.state.loading && <>
      //                     <button classNameName="btn ripple btn-primary" type="button" onClick={this.onConfirm}>{this.state.buttonLabel}</button>
      //                     <button classNameName="btn ripple btn-secondary" type="button" data-dismiss="modal">Close</button>
      //                 </>}

      //                 {this.state.loading && <ActivityLoader />}
      //             </div>
      //         </div>


      //     </div>
      // </div>




      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">


            <div className="modal-header">
              {/* <!-- <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5> --> */}
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
                            <img src={email} alt="" className="" />
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
                            {/* <!-- <label className="form-label text-primary" for="formname">Forgot password</label> --> */}
                            {/* <a href="auth-recoverpw.html" className="text-muted">Forgot password?</a> */}
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
      </div>
    )


  }
}

export default PopLogin;
