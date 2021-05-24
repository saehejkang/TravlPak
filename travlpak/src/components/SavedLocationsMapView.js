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
import { Map, GoogleApiWrapper } from 'google-maps-react';

class SavedLocationsMapView extends Component {
  state = {
    map: map,
  };
  render() {
    return (
      <div className="saved-locations-map-view">
        <Background />
        <Map 
          google={this.props.google} 
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        <div className="selection-bar">  
          <svg width="344" height="40" viewBox="0 0 344 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="342" height="38" rx="19" fill="white" stroke="#BDCAC2"/>
          </svg>
        </div>
        <img className="map-selected" src={mapSelected} alt="map view selected"/>
        <div className="list-view">List View</div>

        <Link to="/home">
          <img className="x" src={xIcon} alt="x icon" />
        </Link>
        
        <TabBar />
      </div>
    );
  }
}

const mapStyles = {
  width: '335px',
  height: '486px',
  left: '40px',
  top: '215px',  
  borderRadius: 8
};

//export default SavedLocationsMapView;
export default GoogleApiWrapper({
  apiKey: process.nextTick.GOOGLE_API_KEY
 })(SavedLocationsMapView);

function Background() {
  return (
    <div>
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background" />
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background" />
      <h1 className="title">My Saved Locations</h1>
    </div>
  );
}

function TabBar() {
  return (
    <div className="tab-bar">
      <div className="white-box">
        <div className="tab-not-pressed">
          <img className="plan-icon" src={planIcon} alt="plan icon" />
          <img className="connect-icon" src={connectIcon} alt="connect icon" />
          <img className="explore-icon" src={exploreIcon} alt="explore icon" />
        </div>
        <div className="tab-pressed" style={{ backgroundImage: `url(${profilePressed})` }}>
          <img className="profile-icon" src={profileIcon} alt="profile icon" />
          <div className="profile">Profile</div>
        </div>
      </div>
    </div>
  );
}
