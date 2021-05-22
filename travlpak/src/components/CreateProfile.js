import "../css/CreateProfile.css";

import { Component } from "react";
import { Link } from "react-router-dom";
import update from 'react-addons-update';

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

import fire from '../firebase.js'



class CreateProfile extends Component {
  state = {
    location: "",
    bio: "",
    age: 0,
    interests: [false, false, false, false,
        false, false, false, false, false,
        false, false, false, false],
  };

  changeState(value) {
    this.setState(update(this.state, {
      interests: {
        [value]: {
          $set : !this.state.interests[value]
        }
      }
    }));
  }

  firebase_update = (user) => {
      let profilePicture = this.state.profilePicture
      let location  = this.state.location
      let bio = this.state.bio
      let age = this.state.age
      let interests = this.state.interests

      var db = fire.firestore();

      fire.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user.uid);
          console.log(location);
          console.log(bio);
          db.collection("Users").doc(user.uid).update({
                      Location: location,
                      bio: bio,
                      interests: interests
                }, {merge: true}).then(() => {
                       console.log("Document successfully updated!");
                })
                .catch((error) => {
                     console.log("Error updating documents: ", error);
                });
        } else {
           console.log("User not logged in");
        }
      });
      console.log(this.state.email);
  }

  render() {
    return (
      <div className="create-profile">
        <div className="add-profile-pic">Add a Profile Picture</div>
        <img className="upload-icon" src={uploadIcon} alt="upload icon" />
        
        <div className="where-travel">Where will you travel from?</div>
        <input placeholder="San Luis Obispo, CA, US" className="location-box" type="text" value={this.location} onChange={(e) => this.setState({location: e.target.value })}/>
        
        <div className="bio-prompt">What would you like other travelers to know about you?</div>
        <textarea placeholder="i’m a freelance photographer trying to make it to 100 countries!" className="bio-box" type="text" value={this.bio} onChange={(e) => this.setState({bio: e.target.value})}/>
        
        <div className="interests-prompt">Tell us about your Interests!</div>
        <div className="create-profile-tags">
          <img className="photography" src={this.state.interests[0] ? photogtaphyS : photogtaphyU} alt="photography tag" onClick={(e) => this.changeState(0)}/>
          <img className="viticulture" src={this.state.interests[1] ? viticultureS : viticultureU} alt="viticulture tag" onClick={(e) => this.changeState(1)}/>
          <img className="nature" src={this.state.interests[2] ? natureS : natureU} alt="nature tag" onClick={(e) => this.changeState(2)}/>
          <img className="hiking" src={this.state.interests[3] ? hikingS : hikingU} alt="hiking tag" onClick={(e) => this.changeState(3)}/>
          <img className="skiing" src={this.state.interests[4] ? skiingS : skiingU} alt="skiing tag" onClick={(e) => this.changeState(4)}/>
          <img className="mountain-biking" src={this.state.interests[5] ? mountainBikingS : mountainBikingU} alt="mountain biking tag" onClick={(e) => this.changeState(5)}/>
          <img className="beaches" src={this.state.interests[6] ? beachesS : beachesU} alt="beaches tag" onClick={(e) => this.changeState(6)}/>
          <img className="architecture" src={this.state.interests[7] ? architectureS : architectureU} alt="architecture tag" onClick={(e) => this.changeState(7)}/>
          <img className="surfing" src={this.state.interests[8] ? surfingS : surfingU} alt="surfing tag" onClick={(e) => this.changeState(8)}/>
          <img className="botany" src={this.state.interests[9] ? botanyS : botanyU} alt="botany tag" onClick={(e) => this.changeState(9)}/>
          <img className="history2" src={this.state.interests[10] ? historyS : historyU} alt="history tag" onClick={(e) => this.changeState(10)}/>
          <img className="art" src={this.state.interests[11] ? artS : artU} alt="art tag" onClick={(e) => this.changeState(11)}/>
          <img className="urban-settings" src={this.state.interests[12] ? urbanSettingsS : urbanSettingsU} alt="urban settings tag" onClick={(e) => this.changeState(12)}/>
        </div>
        <Link to="home">
          <img className="arrow-button" src={arrowButton} alt="arrow button" onClick={this.firebase_update} />
        </Link>
      </div>
    );
  }
}
export default CreateProfile;
