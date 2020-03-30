import React, { Component } from "react";
import "./RegistrationForm.css";
import Button from "../Button";

class RegistrationForm extends Component {
  render() {
    return (
      <form className="login-form">
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </li>
          <li>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" />
          </li>
          <li>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" />
          </li>
        </ul>
        <div className="submit-wrapper">
          <Button onClick={this.register} text="Sign Up" />
        </div>
      </form>
    );
  }
}

export default RegistrationForm;