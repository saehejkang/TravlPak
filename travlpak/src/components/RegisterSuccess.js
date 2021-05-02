import "../css/RegisterSuccess.css";

import { Link } from "react-router-dom";
import React, { Component } from "react";

import arrowButton from "../resources/RegisterSuccess-Resources/arrowButton.svg";
import deliveryTruck from "../resources/RegisterSuccess-Resources/deliveryTruck.svg";
import checkMark from "../resources/RegisterSuccess-Resources/checkMark.svg";
import or from "../resources/LogIn-Resources/or.svg";

class RegisterSuccess extends Component {
  state = {};
  
  render() {
    return (
      <div className="register-success">
        <img className="check-mark" src={checkMark} alt="check mark"/>
        <div className="successful">accound successfully created!</div>
        <div className="otw">You are on the way to your next adventure!</div>
        <img className="delivery-truck" src={deliveryTruck} alt="delivery truck"/>
        <div className="stand-out">make yourself stand out by completing your profile</div>
        <Link to="/createProfile">
          <img className="arrow-button-rs" src={arrowButton} alt="arrow button"/>
        </Link>
        <img className="or-divider-rs" src={or} alt="or divider"/>
        <Link to="/home">
          <div className="continue-to-app">continue to the app</div>
        </Link>
      </div>
    );
  }
}

export default RegisterSuccess;
