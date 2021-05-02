<<<<<<< Updated upstream
import './SearchPreferences.css';

import whiteBackground from './resources/whiteBackground.svg';
import dotsStarsBackground from './resources/dotsStars.svg';
import exploreIcon from './resources/tabBar/exploreIcon.svg';
import connectIcon from './resources/tabBar/connectIcon.svg';
import planIcon from './resources/tabBar/planIcon.svg';
import profileIcon from './resources/tabBar/profileIcon.svg';
import profilePressed from './resources/tabBar/profilePressed.svg';
import scooterImg from './resources/scooter.svg';
import xIcon from './resources/exitIcon.svg';

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
=======
import "../css/SearchPreferences.css";
import "../css/background.css";
import "../css/tabBarProfile.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import whiteBackground from "../resources/background-Resources/whiteBackground.svg";
import dotsStarsBackground from "../resources/background-Resources/dotsStars.svg";
import xIcon from "../resources/background-Resources/exitIcon.svg";

import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import planIcon from "../resources/tabBar-Resources/planIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profileIcon.svg";
import profilePressed from "../resources/tabBar-Resources/profilePressed.svg";

import scooterImg from "../resources/SearchPreferences-Resources/scooter.svg";

import photogtaphyU from "../resources/tags-Resources/unselected/photography.svg";
import photogtaphyS from "../resources/tags-Resources/selected/photography.svg";
import viticultureU from "../resources/tags-Resources/unselected/viticulture.svg";
import viticultureS from "../resources/tags-Resources/selected/viticulture.svg";
import natureU from "../resources/tags-Resources/unselected/nature.svg";
import natureS from "../resources/tags-Resources/selected/nature.svg";
import hikingU from "../resources/tags-Resources/unselected/hiking.svg";
import hikingS from "../resources/tags-Resources/selected/hiking.svg";
import skiingU from "../resources/tags-Resources/unselected/skiing.svg";
import skiingS from "../resources/tags-Resources/selected/skiing.svg";
import mountainBikingU from "../resources/tags-Resources/unselected/mountainBiking.svg";
import mountainBikingS from "../resources/tags-Resources/selected/mountainBiking.svg";
import beachesU from "../resources/tags-Resources/unselected/beaches.svg";
import beachesS from "../resources/tags-Resources/selected/beaches.svg";
import architectureU from "../resources/tags-Resources/unselected/architechture.svg";
import architectureS from "../resources/tags-Resources/selected/architechture.svg";
import surfingU from "../resources/tags-Resources/unselected/surfing.svg";
import surfingS from "../resources/tags-Resources/selected/surfing.svg";
import botanyU from "../resources/tags-Resources/unselected/botany.svg";
import botanyS from "../resources/tags-Resources/selected/botany.svg";
import historyU from "../resources/tags-Resources/unselected/history.svg";
import historyS from "../resources/tags-Resources/selected/history.svg";
import artU from "../resources/tags-Resources/unselected/art.svg";
import artS from "../resources/tags-Resources/selected/art.svg";
import urbanSettingsU from "../resources/tags-Resources/unselected/urbanSettings.svg";
import urbanSettingsS from "../resources/tags-Resources/selected/urbanSettings.svg";

class SearchPreferences extends Component {
  state = {
    location: "",
    photography: false,
    viticulture: false,
    nature: false,
    hiking: false,
    skiing: false,
    mountainBiking: false,
    beaches: false,
    architecture: false,
    surfing: false,
    botany: false,
    history: false,
    art: false,
    urbanSettings: false,
  };

  changeState(interest) {
    this.state.[interest] ? this.setState({[interest]: false}) : this.setState({[interest]: true})
  }

  render() {
    return (
      <div className="search-preferences">
        <Background />
        <div className="my-interests">My Interests</div>
        
        <div className="search-preferences-tags">
          <img className="photography" src={this.state.photography ? photogtaphyS : photogtaphyU} alt="photography tag" onClick={(e) => this.changeState("photography")}/>
          <img className="viticulture" src={this.state.viticulture ? viticultureS : viticultureU} alt="viticulture tag" onClick={(e) => this.changeState("viticulture")}/>
          <img className="nature" src={this.state.nature ? natureS : natureU} alt="nature tag" onClick={(e) => this.changeState("nature")}/>
          <img className="hiking" src={this.state.hiking ? hikingS : hikingU} alt="hiking tag" onClick={(e) => this.changeState("hiking")}/>
          <img className="skiing" src={this.state.skiing ? skiingS : skiingU} alt="skiing tag" onClick={(e) => this.changeState("skiing")}/>
          <img className="mountain-biking" src={this.state.mountainBiking ? mountainBikingS : mountainBikingU} alt="mountain biking tag" onClick={(e) => this.changeState("mountainBiking")}/>
          <img className="beaches" src={this.state.beaches ? beachesS : beachesU} alt="beaches tag" onClick={(e) => this.changeState("beaches")}/>
          <img className="architecture" src={this.state.architecture ? architectureS : architectureU} alt="architecture tag" onClick={(e) => this.changeState("architecture")}/>
          <img className="surfing" src={this.state.surfing ? surfingS : surfingU} alt="surfing tag" onClick={(e) => this.changeState("surfing")}/>
          <img className="botany" src={this.state.botany ? botanyS : botanyU} alt="botany tag" onClick={(e) => this.changeState("botany")}/>
          <img className="history2" src={this.state.history ? historyS : historyU} alt="history tag" onClick={(e) => this.changeState("history")}/>
          <img className="art" src={this.state.art ? artS : artU} alt="art tag" onClick={(e) => this.changeState("art")}/>
          <img className="urban-settings" src={this.state.urbanSettings ? urbanSettingsS : urbanSettingsU} alt="urban settings tag" onClick={(e) => this.changeState("urbanSettings")}/>
        </div>

        <div className="my-location">My Location</div>
        <input placeholder="San Luis Obispo, CA, US" className="my-location-box" type="location" value={this.location} onChange={(e) => this.setState({location: e.target.value })}/>

        <img className="scooter-img" src={scooterImg} alt="scooter img"/>
        <TabBar />
      </div>
    );
  }
>>>>>>> Stashed changes
}

export default SearchPreferences;

function Background() {
  return (
<<<<<<< Updated upstream
    <div className="background">
      <div className="overlap-group1">
        <div className="green"></div>
        <img className="white" src={whiteBackground} alt="white background"/>
        <img className="dots-stars" src={dotsStarsBackground} alt="dots and stars in background"/>
        <h1 className="title">Search Preferences</h1>
      </div>
=======
    <div>
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background" />
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background" />
      <h1 className="title">Search Preferences</h1>
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
      <div className="white-box">
        <div className="tab-not-pressed">
          <img className="plan-icon" src={planIcon} alt="plan icon"/>
          <img className="connect-icon" src={connectIcon} alt="connect icon"/>
          <img className="explore-icon" src={exploreIcon} alt="explore icon"/>
        </div>
        <div className="tab-pressed" style={{ backgroundImage: `url(${profilePressed})` }}>
<<<<<<< Updated upstream
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
=======
          <img className="profile-icon" src={profileIcon} alt="profile icon" />
          <div className="profile">Profile</div>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  </div>
  );
}