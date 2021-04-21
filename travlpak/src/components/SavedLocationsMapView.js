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
    <div className="background">
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background"/>
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background"/>
      <h1 className="title">My Saved Locations</h1>
      <img className="x" src={xIcon} alt="x icon"/>
    </div>
  );
}

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

function Map() {
  return (
    <div className="map">
      <div className="map2" style={{ backgroundImage: `url(${map})` }}>
        <div className="text-2 sfprodisplay-regular-normal-white-18px">
          <span className="span0">♥</span>
        </div>
        <div className="text-1 sfprodisplay-regular-normal-white-18px">
          <span className="span0">♥</span>
        </div>
      </div>
    </div>
  );
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
