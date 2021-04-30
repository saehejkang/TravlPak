import { Component } from "react";

import "../css/LogIn.css";
import logo from "../resources/LogIn-Resources/logo.svg";
import car from "../resources/LogIn-Resources/car.svg";
import continueButton from "../resources/LogIn-Resources/continueButton.svg";
import or from "../resources/LogIn-Resources/or.svg";

class LogIn extends Component {
  render() {
    return (
      <div class="sign-in-page">
        <img className="travlpak-logo" src={logo} alt="travlpak logo" />
        <img className="car-illustration" src={car} alt="family in car" />
        <h1 className="sign-in">Sign In</h1>

        <div className="username-box">
          <div className="username">travlpak</div>
        </div>

        <div className="password-box">
          <div className="password">•••••••••••••</div>
        </div>

        <p className="prompt">
          please enter your username and password in the fields above
        </p>
        <img
          className="continue-button"
          src={continueButton}
          alt="continue button"
        />
        <img className="or-divider" src={or} alt="or divider" />
        <div className="create-account">Create Account</div>
      </div>
    );
  }
}

export default LogIn;
