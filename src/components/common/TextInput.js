import React from 'react';

import email from '../../assets/images/icons/email.svg';

class TextInput extends React.Component {

  render() {

    const inputType = this.props.type || "text"

    return (
      // <div className="row row-xs align-items-center mg-b-20">
      //   <div className="col-md-3 text-left">
      //     <label className="mg-b-0">{this.props.label}</label>
      //   </div>
      //   <div className="col-md-9 mg-t-5 mg-md-t-0">
      //     {inputType !== "textarea" &&
      //       <input
      //         type={inputType || "text"}
      //         className="form-control"
      //         placeholder={this.props.label}
      //         onChange={this.props.onChange()}
      //         value={this.props.value}
      //         autoFocus={this.props.autoFocus}
      //         readOnly={this.props.readonly || false} />}

      //     {inputType === "textarea" &&
      //       <textarea
      //         type={inputType}
      //         className="form-control"
      //         placeholder={this.props.label}
      //         onChange={this.props.onChange()}
      //         value={this.props.value}
      //         autoFocus={this.props.autoFocus}
      //         readOnly={this.props.readonly || false} />}

      //   </div>
      // </div>

      <div className="mb-3">
        <label className="visually-hidden" for="specificSizeInputGroupUsername">{this.props.label}</label>
        <div className="input-group">
          <div className="input-group-text">
            <img src={email} alt="" className="" />
          </div>
          <input
            id="specificSizeInputGroupUsername"

            type={inputType || "text"}
            className="form-control"
            placeholder={this.props.placeholder}
            onChange={this.props.onChange()}
            value={this.props.value}
            autoFocus={this.props.autoFocus}
            readOnly={this.props.readonly || false}
          />
        </div>
      </div>
    );
  }
}

export default TextInput;
