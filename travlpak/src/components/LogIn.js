import "../css/LogIn.css";

import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import logo from "../resources/LogIn-Resources/logo.svg";
import car from "../resources/LogIn-Resources/car.svg";
import continueButton from "../resources/LogIn-Resources/continueButton.svg";
import continueButtonDisabled from "../resources/LogIn-Resources/continueButtonDisabled.svg";
import or from "../resources/LogIn-Resources/or.svg";
import fire from '../firebase.js'
// Notes: Error messages are not showing up. Not 100% sure why but
// I believe it is due to:
// {(this.validateForm() && this.isLoggedIn === true) ? "/home" : "/Login"
// it refreshes the Login page so that the error message does not pop up

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false
  };

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  isNotLoggedIn = () => {
    this.setState( { isLoggedIn : false } );
  }

  isLoggedIn = () => {
    this.setState( { isLoggedIn : true } );
  } 

  firebase_signin = () => {
    const email = this.state.email
    const password = this.state.password

    fire.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
        var firebase_user = userCredential.user;
        console.log(firebase_user)
        this.firebase_checkEmailVerified(firebase_user);
    })
    .catch((error) => {
        alert('Invalid email or password');
        console.log(error)
    });
  }

  firebase_checkEmailVerified = (firebase_user) => {
    var emailVerified = firebase_user.emailVerified;
    
    if (!emailVerified) {
      this.isNotLoggedIn()
      //add prompt to ask to verify their email address
      alert('Please verify your email before logging in')
    } 
    else {
      this.isLoggedIn()
    }
}

  render() {
    return (
      <div class="sign-in-page">
        <img className="travlpak-logo" src={logo} alt="travlpak logo" />
        <img className="car-illustration" src={car} alt="family in car" />
        <h1 className="sign-in">Sign In</h1>

        <input placeholder="travlpak@gmail.com" className="email-box" type="email" value={this.email} onChange={(e) => this.setState({ email: e.target.value })}/>

        <input placeholder="•••••••••••••" className="password-box" type="password" value={this.password} onChange={(e) => this.setState({ password: e.target.value })}/>

        <Link to={(this.validateForm() && this.isLoggedIn === true) ? "/home" : "/Login"}>
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
