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
