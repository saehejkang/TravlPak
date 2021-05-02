import "../css/LogIn.css";

import { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../resources/LogIn-Resources/logo.svg";
import car from "../resources/LogIn-Resources/car.svg";
import continueButton from "../resources/LogIn-Resources/continueButton.svg";
import continueButtonDisabled from "../resources/LogIn-Resources/continueButtonDisabled.svg";
import or from "../resources/LogIn-Resources/or.svg";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  render() {
    return (
      <div class="sign-in-page">
        <img className="travlpak-logo" src={logo} alt="travlpak logo" />
        <img className="car-illustration" src={car} alt="family in car" />
        <h1 className="sign-in">Sign In</h1>

        <input placeholder="travlpak@gmail.com" className="email-box" type="email" value={this.email} onChange={(e) => this.setState({ email: e.target.value })}/>

        <input placeholder="•••••••••••••" className="password-box" type="password" value={this.password} onChange={(e) => this.setState({ password: e.target.value })}/>

        <Link to={this.validateForm() ? "/home" : "/login"}>
          <img className="continue-button" src={this.validateForm() ? continueButton : continueButtonDisabled} alt="continue button"/>
        </Link>

        <p className="prompt">please enter your email and password in the fields above</p>
        <img className="or-divider" src={or} alt="or divider" />
        <Link to="/signup">
          <div className="create-account">Create Account</div>
        </Link>
      </div>
    );
  }
}
export default LogIn;
