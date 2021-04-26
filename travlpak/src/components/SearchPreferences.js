import React from 'react';
import './style.css';

import whiteBackground from './resources/whiteBackground.svg';
import dotsStarsBackground from './resources/dotsStars.svg';
import exploreIcon from './resources/tabBar/exploreIcon.svg';
import connectIcon from './resources/tabBar/connectIcon.svg';
import planIcon from './resources/tabBar/planIcon.svg';
import profileIcon from './resources/tabBar/profileIcon.svg';
import profilePressed from './resources/tabBar/profilePressed.svg';
import scooterImg from './resources/scooter.svg';
import xIcon from './resources/exitIcon.svg';

function App() {
  return <SearchPreferences />;
}

export default App;

function SearchPreferences() {
  return (
    <div className="search-preferences">
      <Background />
      <TabBar />
      <img className="scooter-img" src={scooterImg} alt="scooter img"/>
      <Location />
      <Tags />
      <div className="my-interests sfprotext-bold-outer-space-18px">My Interests</div>
      <img className="x" src={xIcon} alt="exit icon"/>
    </div>
  );
}

function Background() {
  return (
    <div className="background">
      <div className="overlap-group1">
        <div className="green"></div>
        <img className="white" src={whiteBackground} alt="white background"/>
        <img className="dots-stars" src={dotsStarsBackground} alt="dots and stars in background"/>
        <h1 className="title">Search Preferences</h1>
      </div>
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

function Location() {
  return (
    <div className="my-location">
      <div className="my-location-1 sfprotext-bold-outer-space-18px">My Location</div>
      <div className="overlap-group4 border-1px-powder-ash">
        <div className="san-luis-obispo-ca">San Luis Obispo, CA, US</div>
      </div>
    </div>
  );
}

function Tags() {
  return (
  <div className="tags-unselected">
    <div className="flex-row-1">
      <div className="photography-unselected">
        <div className="overlap-group13 border-1px-powder-ash">
          <div className="photography sfprotext-regular-normal-powder-ash-14px">photography</div>
        </div>
      </div>
      <div className="viticulture-unselected">
        <div className="overlap-group12 border-1px-powder-ash">
          <div className="viticulture sfprotext-regular-normal-powder-ash-14px">viticulture</div>
        </div>
      </div>
    </div>
    <div className="flex-row-4">
      <div className="nature-unselected">
        <div className="overlap-group11 border-1px-powder-ash">
          <div className="nature sfprotext-regular-normal-powder-ash-14px">nature</div>
        </div>
      </div>
      <div className="hiking-unselected">
        <div className="overlap-group10 border-1px-powder-ash">
          <div className="hiking sfprotext-regular-normal-powder-ash-14px">hiking</div>
        </div>
      </div>
      <div className="skiing-unselected">
        <div className="overlap-group9 border-1px-powder-ash">
          <div className="skiing sfprotext-regular-normal-powder-ash-14px">skiing</div>
        </div>
      </div>
    </div>
    <div className="flex-row-3">
      <div className="mountain-biking-unselected">
        <div className="overlap-group8 border-1px-powder-ash">
          <div className="mountain-biking sfprotext-regular-normal-powder-ash-14px">mountain biking</div>
        </div>
      </div>
      <div className="beach-unselected">
        <div className="overlap-group7 border-1px-powder-ash">
          <div className="beach sfprotext-regular-normal-powder-ash-14px">beaches</div>
        </div>
      </div>
    </div>
    <div className="flex-row">
      <div className="architecture-unselected">
        <div className="overlap-group6 border-1px-powder-ash">
          <div className="architecture sfprotext-regular-normal-powder-ash-14px">architecture</div>
        </div>
      </div>
      <div className="surfing-unselected">
        <div className="overlap-group5 border-1px-powder-ash">
          <div className="surfing sfprotext-regular-normal-powder-ash-14px">surfing</div>
        </div>
      </div>
      <div className="botany-unselected">
        <div className="overlap-group4-1 border-1px-powder-ash">
          <div className="place sfprotext-regular-normal-powder-ash-14px">botany</div>
        </div>
      </div>
    </div>
    <div className="flex-row-2">
      <div className="history-unselected">
        <div className="overlap-group3 border-1px-powder-ash">
          <div className="history sfprotext-regular-normal-powder-ash-14px">history</div>
        </div>
      </div>
      <div className="art-unselected">
        <div className="overlap-group2-1 border-1px-powder-ash">
          <div className="art sfprotext-regular-normal-powder-ash-14px">art</div>
        </div>
      </div>
      <div className="urban-unselected">
        <div className="overlap-group1-2 border-1px-powder-ash">
          <div className="urban sfprotext-regular-normal-powder-ash-14px">urban settings</div>
        </div>
      </div>
    </div>
  </div>
  );
}
