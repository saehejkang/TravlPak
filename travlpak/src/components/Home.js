import "../css/Home.css";
import "../css/tabBarProfile.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import map from "../resources/Home-Resources/map.svg";
import menu from "../resources/Home-Resources/menu.svg";
import threeBoxes from "../resources/Home-Resources/threeBoxes.svg";
import fourBoxes from "../resources/Home-Resources/fourBoxes.svg";
import pictureFrame from "../resources/Home-Resources/pictureFrame.svg";
import menuIcon from "../resources/Home-Resources/menuIcon.svg";
import circle from "../resources/Home-Resources/circle.svg";
import xIconMenu from "../resources/Home-Resources/exitIconMenu.svg";
import logoutIcon from "../resources/Home-Resources/logoutIcon.svg";
import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import planIcon from "../resources/tabBar-Resources/planIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profileIcon.svg";
import profilePressed from "../resources/tabBar-Resources/profilePressed.svg";

class Home extends Component {
  state = {
    name: "TravlPak",
    aboutMeText: "I'm trying to make it to 100 countries!",
    profilePictureImage: "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    greetingName: "TravlPak",
    friendRequestsNumber: "12",
    newMessagesNumber: "2",
    plannedTripsNumber: "1",
    tripsTakenNumber: "6",
    savedLocationsNumber: "2",
    countriesTraveledNumber: "4",
    flightsBoardedNumber: "9",

    menuOpen: false,
  };

  openMenu() {
    this.setState({menuOpen: true})
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  menu() {
    return (
      <div>
        <img className="menu" src={menu} alt="menu"/>
        <img className="x-menu" src={xIconMenu} alt="x icon" onClick={this.closeMenu.bind(this)}/>
        <Link to="/searchPreferences">
          <div className="search-preferences-text">search preferences</div>
        </Link>
        <Link to="/login">
          <img className="logout" src={logoutIcon} alt="logout icon"/>
        </Link>
      </div>
    );
  }
  
  render() {
    return (
      <div className="home">
        <img src={map} alt="map"/>
        <div className="hello">Hello,</div>
        <div className="name">{this.state.name}</div>
        <img className="menu-icon" src={menuIcon} alt="menu icons" onClick={this.openMenu.bind(this)}/>
        <img className="picture-frame" src={pictureFrame} alt="pic frame"/>
        <img className="circle" src={circle} alt="profile pic circle border"/>
        <img className="profile-picture" src={this.state.profilePictureImage} alt="profile pic" />
        <div className="about-me">about me</div>
        <div className="bio">{this.state.aboutMeText}</div>
       
        <img className="three-boxes" src={threeBoxes} alt="three boxes"/>
        <div className="friend-requests">{this.state.friendRequestsNumber}</div>
        <div className="new-messages">{this.state.newMessagesNumber}</div>
        <div className="planned-trips">{this.state.plannedTripsNumber}</div>

        <img className="four-boxes" src={fourBoxes} alt="four boxes"/>
        <div className="trips-taken">{this.state.tripsTakenNumber}</div>
        <Link to={!this.menuOpen ? "/savedLocations-mapView" : "#"}>
          <div className="saved-locations-clickable"></div>
          <div className="saved-locations">{this.state.savedLocationsNumber}</div>
        </Link>
        <div className="countries-traveled">{this.state.countriesTraveledNumber}</div>
        <div className="flights-boarded">{this.state.flightsBoardedNumber}</div>

        <TabBar />
        {this.state.menuOpen ? this.menu() : null}
      </div>
    );
  }
}
export default Home;

function TabBar() {
  return (
    <div className="tab-bar">
        <div className="white-box">
          <div className="tab-not-pressed">
            <img className="plan-icon" src={planIcon} alt="plan icon"/>
            <img className="connect-icon" src={connectIcon} alt="connect icon"/>
            <img className="explore-icon" src={exploreIcon} alt="explore icon"/>
          </div>
          <div className="tab-pressed" style={{ backgroundImage: `url(${profilePressed})` }}>
            <img className="profile-icon" src={profileIcon} alt="profile icon"/>
            <div className="profile sfprotext-normal-white-16px">Profile</div>
          </div>
        </div>
      </div>
  );
}
