import React, { Component } from "react";
import arrowButton from "../resources/CreateProfile-Resources/arrowButton.svg";
import car from "../resources/CreateProfile-Resources/car.svg";
import "../css/RegisterSuccess.css";
import circle from "../resources/CreateProfile-Resources/circle2.svg";

class RegisterSuccess extends Component {
  state = {};
  render() {
    return (
      <div className="register-success">
        <div className="p-5 text-center bg-white">
          <img className="arrow-button" src={circle} />
          <h5 style={{ color: "#638074" }}>account created successfully!</h5>
          <h6 className="text-bot-padding">
            You are on the way to your next adventure!
          </h6>
          <img src={car} />
          <h6 className="text-top-padding">
            make yourself stand out by completing your profile
          </h6>
          <img className="arrow-button" src={arrowButton} />
          <h6 className="text-with-lines">
            <span className="h2-span">or</span>
          </h6>
          <h6 style={{ color: "#BFC0C0" }}>continue to the app</h6>
        </div>
        <div></div>
      </div>
    );
  }
}

export default RegisterSuccess;
