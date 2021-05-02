<<<<<<< Updated upstream
import './Home.css';

import map from './resources/map.svg';
import pictureFrame from './resources/pictureFrame.svg';
import menuIcon from './resources/menuIcon.svg';
import greenBox from './resources/greenBox.svg';
import greenPattern from './resources/greenPattern.svg';
import orangeBox from './resources/orangeBox.svg';
import orangePattern from './resources/orangePattern.svg';
import circle from './resources/circle.svg';
import exploreIcon from './resources/tabBar/exploreIcon.svg';
import connectIcon from './resources/tabBar/connectIcon.svg';
import planIcon from './resources/tabBar/planIcon.svg';
import profileIcon from './resources/tabBar/profileIcon.svg';
import profilePressed from './resources/tabBar/profilePressed.svg';

function Home() {
  return (
    <div className="home">
      <MapSection {...mapSectionData} />
      <ThreeBoxGroup {...threeBoxGroupData} />
      <FourBoxGroup {...fourBoxGroupData} />
      <TabBar />
    </div>
  );
}

function MapSection(props) {
  const {
    aboutMeText,
    profilePictureImage,
    greetingName,
  } = props;

  return (
    <div className="map" style={{ backgroundImage: `url(${map})` }}>
      <div className="overlap-group6">
        <div className="bio">
          <div className="bio-item sfprotext-bold-outer-space-18px">about me</div>
          <p className="bio-item sfprotext-regular-normal-outer-space-13px">{aboutMeText}</p>
        </div>
        <div className="profile-pic-frame">
          <div>
            <div className="frame">
              <div className="overlap-group2" style={{ backgroundImage: `url(${pictureFrame})` }}>
              </div>
            </div>
            <img
              className="circle"
              src={circle}
              alt="profile pic circle border"
            />
            <img className="profile-pic" src={profilePictureImage} alt="profile pic"/>
          </div>
        </div>
        <div className="greeting">
          <div className="hello sfprodisplay-light-outer-space-18px">Hello,</div>
          <h1 className="title sfprodisplay-bold-outer-space-24px">{greetingName}</h1>
        </div>
      </div>
      <div className="three-line-icon">
          <img className="vector-2" src={menuIcon} alt="menu icon"/>
      </div>
    </div>
  );
}

function ThreeBoxGroup(props) {
  const {
    friendRequestsNumber,
    newMessagesNumber,
    plannedTripsNumber,
  } = props;

  return (
    <div className="three-box-group">
      <div className="friends border-1px-stromboli">
        <div className="weight sfprotext-bold-stromboli-13px">{<>Friend<br />Requests</>}</div>
        <div className="x45 sfprotext-bold-asphalt-20px">{friendRequestsNumber}</div>
      </div>
      <div className="messages border-1px-stromboli">
        <div className="new-messages-title sfprotext-bold-stromboli-13px">{<>New<br />Messages</>}</div>
        <div className="new-messages-number sfprotext-bold-asphalt-20px">{newMessagesNumber}</div>
      </div>
      <div className="requests border-1px-stromboli">
        <div className="planned-trips sfprotext-bold-stromboli-13px">{<>Planned<br />Trips</>}</div>
        <div className="number-3 sfprotext-bold-asphalt-20px">{plannedTripsNumber}</div>
      </div>
    </div>  
  );
}
=======
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
>>>>>>> Stashed changes

        {this.state.menuOpen ? this.menu() : null}

<<<<<<< Updated upstream
  return (
    <div className="four-box-group">
      <div className="flex-col">
        <div className="trips-taken">
          <div className="trips-taken-box" style={{ backgroundImage: `url(${greenBox})` }}>
            <div className="flex-col-3">
              <div className="trips-taken-1 sfprotext-bold-white-16px">{<>trips<br />taken</>}</div>
              <div className="number-1 sfprotext-heavy-normal-white-24px">{tripsTakenNumber}</div>
            </div>
            <img className="pattern" src={greenPattern} alt="trips taken pattern"/>
          </div>
        </div>
        <div className="saved-locations">
          <div className="overlap-group-2" style={{ backgroundImage: `url(${orangeBox})` }}>
            <div className="overlap-group-3">
              <img className="orange-pattern" src={orangePattern} alt="saved locations pattern"/>
              <div className="saved-locations-1 sfprotext-bold-white-16px">{<>saved <br />locations</>}</div>
            </div>
            <div className="number-2 sfprotext-heavy-normal-white-24px">{savedLocationsNumber}</div>
          </div>
        </div>
      </div>
      <div className="flex-col-2">
        <div className="contries-traveled">
          <div className="overlap-group-2" style={{ backgroundImage: `url(${greenBox})` }}>
            <div className="overlap-group-3">
              <img className="pattern-1" src={greenPattern} alt="countries traveled pattern"/>
              <div className="countries-traveled sfprotext-bold-white-16px">{<>countries<br />traveled</>}</div>
            </div>
            <div className="number-2 sfprotext-heavy-normal-white-24px">{countriesTraveledNumber}</div>
          </div>
        </div>
        <div className="flights-box">
          <div className="overlap-group-1" style={{ backgroundImage: `url(${greenBox})` }}>
            <div className="flex-col-1">
              <div className="flights-boarded sfprotext-bold-white-16px">{<>flights <br />boarded</>}</div>
              <div className="number-1 sfprotext-heavy-normal-white-24px">{flightsBoardedNumber}</div>
            </div>
            <img className="pattern-2" src={greenPattern} alt="flights boarded pattern"/>
          </div>
        </div>
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
}

const mapSectionData = {
  aboutMeText: "I'm trying to make it to 100 countries!",
  profilePictureImage: "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
  greetingName: "TravlPak",
};

const threeBoxGroupData = {
  friendRequestsNumber: "12",
  newMessagesNumber: "2",
  plannedTripsNumber: "1",
};

const fourBoxGroupData = {
  tripsTakenNumber: "6",
  savedLocationsNumber: "2",
  countriesTraveledNumber: "4",
  flightsBoardedNumber: "9",
};
=======
}
>>>>>>> Stashed changes
