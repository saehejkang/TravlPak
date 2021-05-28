import "../css/Home.css";
import "../css/tabBarProfile.css";

import { Link } from "react-router-dom";
import React, { Component } from "react";
import fire from "../firebase.js";

import map from "../resources/Home-Resources/map.svg";
import menu from "../resources/Home-Resources/menu.svg";
import threeBoxes from "../resources/Home-Resources/threeBoxes.svg";
import fourBoxes from "../resources/Home-Resources/fourBoxes.svg";
import menuIcon from "../resources/Home-Resources/menuIcon.svg";
import xIconMenu from "../resources/Home-Resources/exitIconMenu.svg";
import logoutIcon from "../resources/Home-Resources/logoutIcon.svg";
import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import planIcon from "../resources/tabBar-Resources/planIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profileIcon.svg";
import profilePressed from "../resources/tabBar-Resources/profilePressed.svg";

class Home extends Component {
  state = {
    name: "",
    location: "",
    aboutMeText: "",
    profilePictureImage: "",
    friendRequestsNumber: "0",
    unreadMessagesNumber: "0",
    tripInvitationsNumber: "0",
    connectionsNumber: "0",
    savedLocationsNumber: "0",
    tripsPlannedNumber: "0",
    tripsTakenNumber: "0",

    menuOpen: false,
  };

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  async componentDidMount() {
    this.isSignedIn();
  }

  isSignedIn() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        var db = fire.firestore();
        console.log(user);
        db.collection("Users").onSnapshot(
          (data) => {
            this.getUserData(user);
          },
          (err) => {
            console.lof(err);
          }
        );
        //call function here and pass in user which is the data
      } else {
        console.log("user signed out");
      }
    });
  }

  getUserData(user) {
    var db = fire.firestore();
    db.collection("Users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        console.log("data " + doc.data().FirstName);
        this.setState({
          name: doc.data().FirstName,
          aboutMeText: doc.data().bio,
          location: doc.data().Location,
        });
      });

    fire
      .storage()
      .ref("ProfilePicutres/" + user.uid)
      .getDownloadURL()
      .then((imgURL) => {
        this.setState({
          profilePictureImage: imgURL,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          profilePictureImage:
            "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        });
      });
  }

  signout() {
    fire
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  menu() {
    return (
      <div>
        <img className="menu" src={menu} alt="menu" />
        <img
          className="x-menu"
          src={xIconMenu}
          alt="x icon"
          onClick={this.closeMenu.bind(this)}
        />
        <Link to="/searchPreferences">
          <div className="search-preferences-text">search preferences</div>
        </Link>
        <Link to="/accountSettings">
          <div className="account-settings-text">account settings</div>
        </Link>
        <Link to="/login">
          <img
            className="logout"
            src={logoutIcon}
            alt="logout icon"
            onClick={this.signout}
          />
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="home">
        <img src={map} alt="map" />
        <div className="hello">Hello,</div>
        <div className="name">{this.state.name}</div>
        <img
          className="menu-icon"
          src={menuIcon}
          alt="menu icons"
          onClick={this.openMenu.bind(this)}
        />
        <img
          className="profile-picture"
          src={this.state.profilePictureImage}
          alt="profile pic"
        />
        <div className="home-location">{this.state.location}</div>
        <div className="bio">{this.state.aboutMeText}</div>

        <img className="three-boxes" src={threeBoxes} alt="three boxes" />
        <Link to={!this.menuOpen ? "/connect" : "#"}>
          <div className="friend-requests">
            {this.state.friendRequestsNumber}
          </div>
        </Link>
        <Link to={!this.menuOpen ? "/home" : "#"}>
          <div className="unread-messages">
            {this.state.unreadMessagesNumber}
          </div>
        </Link>
        <Link to={!this.menuOpen ? "/home" : "#"}>
          <div className="trip-invitations">
            {this.state.tripInvitationsNumber}
          </div>
        </Link>

        <img className="four-boxes" src={fourBoxes} alt="four boxes" />
        <Link to={!this.menuOpen ? "/home" : "#"}>
          <div className="connections">{this.state.connectionsNumber}</div>
        </Link>
        <Link to={!this.menuOpen ? "/savedLocations-mapView" : "#"}>
          <div className="saved-locations">
            {this.state.savedLocationsNumber}
          </div>
        </Link>
        <Link to={!this.menuOpen ? "/plan" : "#"}>
          <div className="trips-planned">{this.state.tripsPlannedNumber}</div>
        </Link>
        <Link to={!this.menuOpen ? "/plan" : "#"}>
          <div className="trips-taken">{this.state.tripsTakenNumber}</div>
        </Link>

        <TabBar />
        {this.state.menuOpen ? this.menu() : null}
      </div>
    );
  }
}
export default Home;

function TabBar() {
  return (
    <React.Fragment>
      <div className="tab-bar">
        <div className="white-box">
          <div className="tab-not-pressed">
            <Link to={"/plan"}>
              <img className="plan-icon" src={planIcon} alt="plan icon" />
            </Link>

            <Link to={"/connect"}>
              <img
                className="connect-icon"
                src={connectIcon}
                alt="connect icon"
              />
            </Link>

            <Link to={"/explore"}>
              <img
                className="explore-icon"
                src={exploreIcon}
                alt="explore icon"
              />
            </Link>
          </div>
          <div
            className="tab-pressed"
            style={{ backgroundImage: `url(${profilePressed})` }}
          >
            <img
              className="profile-icon"
              src={profileIcon}
              alt="profile icon"
            />
            <div className="profile sfprotext-normal-white-16px">Profile</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
