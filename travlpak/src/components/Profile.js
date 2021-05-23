import "../css/Profile.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import planIcon from "../resources/tabBar-Resources/planIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profile.svg";
import connectPressed from "../resources/tabBar-Resources/connectPressed.svg";


import addButton from "../resources/Profile-Resources/addButton.svg";
import removeButton from "../resources/Profile-Resources/removeButton.svg";
import boxes from "../resources/Profile-Resources/boxes.svg";
import exampleInterests from "../resources/Profile-Resources/exampleInterests.svg";

class Profile extends Component {
    state = {
        isMyFriend: false,
        userFirstName: "Annie",
        userLastName: "Spratt",
        userPicture: "https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1148&q=80",
        userAge: "22",
        userBio: "i’m a freelance photographer trying to make it to 100 countries!",
        userLocation: "Seattle, Washington, US",
        userTripsTaken: 8,
        userInterests: [false, false, false, false,
            false, false, false, false, false,
            false, false, false, false],
    };

    render() {
        return (
            <div className="profile-page">
                <img className="user-profile-picture" src={this.state.userPicture} alt="user profile pic"/>

                <Link to="/chat">
                    <div className="back-to-message-center">
                        <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 22L1 11.5L11 1" stroke="#424D47" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </Link>

                <div className="profile-white">
                    <svg width="414" height="512" viewBox="0 0 414 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20C0 8.95431 8.9543 0 20 0H394C405.046 0 414 8.95431 414 20V512H0V20Z" fill="white"/>
                    </svg>
                </div>

                <h className="profile-name">{this.state.userFirstName + " " + this.state.userLastName}</h>
                <p className="profile-age">{this.state.userAge}</p>
                <img className="add-remove-button" src={this.state.isMyFriend ? removeButton : addButton} onClick={(e) => this.setState({ isMyFriend : !this.state.isMyFriend})} alt="add/remove button"/>

                <p className="profile-bio">{this.state.userBio}</p>

                <img className="profile-boxes" src={boxes} alt="info boxes"/>
                <p className="profile-trips-taken">{this.state.userTripsTaken}</p>
                <p className="profile-location">{this.state.userLocation}</p>

                <img className="example-interests" src={exampleInterests} alt="example interests"/>
            
                <TabBar />
            </div>
        );
    }
}
export default Profile;

function TabBar() {
    return (
      <div className="tab-bar">
        <div className="white-box">
          <Link to="/plan">
              <img className="connect-plan-icon" src={planIcon} alt="plan icon"/>
          </Link>
  
          <Link to="/home">
              <img className="connect-profile-icon" src={profileIcon} alt="connect icon"/>
          </Link>
  
          <Link to="/explore">
              <img className="explore-icon" src={exploreIcon} alt="explore icon"/>
          </Link>
          
          <img className="connect-pressed" src={connectPressed} alt="profile icon" />
        </div>
      </div>
    );
  }