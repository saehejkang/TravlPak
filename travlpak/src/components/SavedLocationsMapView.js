<<<<<<< Updated upstream
import './SavedLocationsMapView.css';

import whiteBackground from './resources/whiteBackground.svg';
import dotsStarsBackground from './resources/dotsStars.svg';
import exploreIcon from './resources/tabBar/exploreIcon.svg';
import connectIcon from './resources/tabBar/connectIcon.svg';
import planIcon from './resources/tabBar/planIcon.svg';
import profileIcon from './resources/tabBar/profileIcon.svg';
import profilePressed from './resources/tabBar/profilePressed.svg';
import map from './resources/map.svg';
import oval from './resources/oval.svg';
import xIcon from './resources/exitIcon.svg';

=======
import "../css/SavedLocationsMapView.css";
import "../css/background.css";
import "../css/tabBarProfile.css";
import { Component } from "react";
import { Link } from "react-router-dom";

import whiteBackground from "../resources/background-Resources/whiteBackground.svg";
import dotsStarsBackground from "../resources/background-Resources/dotsStars.svg";
import xIcon from "../resources/background-Resources/exitIcon.svg";
import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import planIcon from "../resources/tabBar-Resources/planIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profileIcon.svg";
import profilePressed from "../resources/tabBar-Resources/profilePressed.svg";
import map from "../resources/SavedLocationsMapView-Resources/map.svg";
import mapSelected from "../resources/SavedLocationsMapView-Resources/mapSelected.svg";

class SavedLocationsMapView extends Component {
  state = {
    map: map,
  };
  render() {
    return (
      <div className="saved-locations-map-view">
        <Background />
        <div className="map" style={{ backgroundImage: `url(${this.state.map})` }}></div>
        
        <div className="selection-bar">  
          <svg width="344" height="40" viewBox="0 0 344 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="342" height="38" rx="19" fill="white" stroke="#BDCAC2"/>
          </svg>
        </div>
        <img className="map-selected" src={mapSelected} alt="map view selected"/>
        <div className="list-view">List View</div>

        <TabBar />
      </div>
    );
  }
}
>>>>>>> Stashed changes

function SavedLocationsMapView() {
  return (
    <div className="saved-locations-map-view">
      <Background />
      <TabBar />
      <Map />
      <SelectionBar />
    </div>
  );
}

function Background() {
  return (
    <div>
      <div className="green"></div>
<<<<<<< Updated upstream
      <img className="white" src={whiteBackground} alt="white background"/>
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background"/>
      <h1 className="title">My Saved Locations</h1>
      <img className="x" src={xIcon} alt="x icon"/>
=======
      <img className="white" src={whiteBackground} alt="white background" />
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background" />
      <h1 className="title">My Saved Locations</h1>
      <Link to="/home">
        <img className="x" src={xIcon} alt="x icon" />
      </Link>
>>>>>>> Stashed changes
    </div>
  );
}

function TabBar() {
  return (
    <div className="tab-bar">
<<<<<<< Updated upstream
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

function Map() {
  return (
    <div className="map">
      <div className="map2" style={{ backgroundImage: `url(${map})` }}>
        <div className="text-2 sfprodisplay-regular-normal-white-18px">
          <span className="span0">♥</span>
        </div>
        <div className="text-1 sfprodisplay-regular-normal-white-18px">
          <span className="span0">♥</span>
=======
      <div className="white-box">
        <div className="tab-not-pressed">
          <img className="plan-icon" src={planIcon} alt="plan icon" />
          <img className="connect-icon" src={connectIcon} alt="connect icon" />
          <img className="explore-icon" src={exploreIcon} alt="explore icon" />
        </div>
        <div className="tab-pressed" style={{ backgroundImage: `url(${profilePressed})` }}>
          <img className="profile-icon" src={profileIcon} alt="profile icon" />
          <div className="profile">Profile</div>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
<<<<<<< Updated upstream
}

function SelectionBar() {
  return (
    <div className="selection-bar">
      <div className="overlap-group5">
        <div className="rectangle"></div>
        <div className="list-view">List View</div>
        <div className="group-1">
          <div className="overlap-group1-1">
            <div className="map-view sfprotext-normal-white-16px">Map View</div>
          </div>
        </div>
        <img className="oval" src={oval} alt="oval selected icon"/>
      </div>
    </div>
  );
}
=======
}
>>>>>>> Stashed changes
