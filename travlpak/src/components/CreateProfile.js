<<<<<<< Updated upstream
import './CreateProfile.css';

import profilePictureFrame from './resources/circle2.svg';
import uploadIcon from './resources/uploadIcon.svg';
import bioInputBox from './resources/bioInputBox.svg';
import arrowButton from './resources/arrowButton.svg';

function CreateProfile() {

  return (
    <div className="create-profile">
      <ProfilePicture />
      <Location />
      <Bio />
      <Interests />
      <img className="arrow-button" src={arrowButton} alt="arrow button"/>
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="profile-pic">
      <div className="text-4 sfprotext-medium-stromboli-18px">Add a Profile Picture</div>
      <div className="overlap-group15">
        <img className="photo-frame" src={profilePictureFrame} alt="profile pic circle frame"/>
        <img className="upload-icon" src={uploadIcon} alt="upload icon"/>
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="location-1">
      <div className="text-3 sfprotext-medium-stromboli-18px">Where will you travel from?</div>
      <div className="overlap-group14 border-1px-powder-ash">
        <div className="location sfprodisplay-regular-normal-mercury-18px">San Luis Obispo, CA, US</div>
      </div>
    </div>
  );
}

function Bio() {
  return (
    <div className="about-me">
      <div className="text-2 sfprotext-medium-stromboli-18px">{<>What would you like other travelers to <br />know about you?</>}</div>
      <div className="overlap-group13">
        <div className="bio sfprodisplay-regular-normal-mercury-18px">i’m a freelance photographer trying to make it to 100 countries!</div>
        <img className="bio-input-box" src={bioInputBox} alt="bio input box"/>
      </div>
    </div>
  );
}

function Interests() {
  return (
    <div className="interests">
      <div className="text-1 sfprotext-medium-stromboli-18px">Tell us about your Interests!</div>
      <Tags />
    </div>
  );
}

function Tags() {
  return (
    <div className="tags-unselected">
      <div className="flex-row-2">
        <div className="photography-unselected">
          <div className="overlap-group12 border-1px-powder-ash">
            <div className="photography sfprotext-regular-normal-powder-ash-14px">photography</div>
          </div>
        </div>
        <div className="viticulture-unselected">
          <div className="overlap-group11 border-1px-powder-ash">
            <div className="viticulture sfprotext-regular-normal-powder-ash-14px">viticulture</div>
          </div>
        </div>
      </div>
      <div className="flex-row-4">
        <div className="nature-unselected">
          <div className="overlap-group10 border-1px-powder-ash">
            <div className="nature sfprotext-regular-normal-powder-ash-14px">nature</div>
          </div>
        </div>
        <div className="hiking-unselected">
          <div className="overlap-group9 border-1px-powder-ash">
            <div className="hiking sfprotext-regular-normal-powder-ash-14px">hiking</div>
          </div>
        </div>
        <div className="skiing-unselected">
          <div className="overlap-group8 border-1px-powder-ash">
            <div className="skiing sfprotext-regular-normal-powder-ash-14px">skiing</div>
          </div>
        </div>
      </div>
      <div className="flex-row-3">
        <div className="mountain-biking-unselected">
          <div className="overlap-group7 border-1px-powder-ash">
            <div className="mountain-biking sfprotext-regular-normal-powder-ash-14px">mountain biking</div>
          </div>
        </div>
        <div className="beach-unselected">
          <div className="overlap-group6 border-1px-powder-ash">
            <div className="beach sfprotext-regular-normal-powder-ash-14px">beaches</div>
          </div>
        </div>
      </div>
      <div className="flex-row">
        <div className="architecture-unselected">
          <div className="overlap-group5 border-1px-powder-ash">
            <div className="architecture sfprotext-regular-normal-powder-ash-14px">architecture</div>
          </div>
        </div>
        <div className="surfing-unselected">
          <div className="overlap-group4 border-1px-powder-ash">
            <div className="surfing sfprotext-regular-normal-powder-ash-14px">surfing</div>
          </div>
        </div>
        <div className="botany-unselected">
          <div className="overlap-group3 border-1px-powder-ash">
            <div className="place sfprotext-regular-normal-powder-ash-14px">botany</div>
          </div>
        </div>
      </div>
      <div className="flex-row-1">
        <div className="history-unselected">
          <div className="overlap-group2 border-1px-powder-ash">
            <div className="history sfprotext-regular-normal-powder-ash-14px">history</div>
          </div>
        </div>
        <div className="art-unselected">
          <div className="overlap-group1 border-1px-powder-ash">
            <div className="art sfprotext-regular-normal-powder-ash-14px">art</div>
          </div>
        </div>
        <div className="urban-unselected">
          <div className="overlap-group border-1px-powder-ash">
            <div className="urban sfprotext-regular-normal-powder-ash-14px">urban settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
import "../css/CreateProfile.css";

import { Component } from "react";
import { Link } from "react-router-dom";

import uploadIcon from "../resources/CreateProfile-Resources/uploadIcon.svg";
import arrowButton from "../resources/CreateProfile-Resources/arrowButton.svg";

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

class CreateProfile extends Component {
  state = {
    profilePicure: "",
    location: "",
    bio: "",
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
      <div className="create-profile">
        <div className="add-profile-pic">Add a Profile Picture</div>
        <img className="upload-icon" src={uploadIcon} alt="upload icon" />
        
        <div className="where-travel">Where will you travel from?</div>
        <input placeholder="San Luis Obispo, CA, US" className="location-box" type="location" value={this.location} onChange={(e) => this.setState({location: e.target.value })}/>
        
        <div className="bio-prompt">What would you like other travelers to know about you?</div>
        <textarea placeholder="i’m a freelance photographer trying to make it to 100 countries!" className="bio-box" type="bio" value={this.bio} onChange={(e) => this.setState({bio: e.target.value})}/>
        
        <div className="interests-prompt">Tell us about your Interests!</div>
        <div className="create-profile-tags">
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
        <Link to="home">
          <img className="arrow-button" src={arrowButton} alt="arrow button" />
        </Link>
      </div>
    );
  }
}
export default CreateProfile;
>>>>>>> Stashed changes
