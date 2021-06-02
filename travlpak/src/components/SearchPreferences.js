import "../css/SearchPreferences.css";
import "../css/background.css";
import "../css/tabBarProfile.css";

import { Link } from "react-router-dom";
import { Component } from "react";
import update from 'react-addons-update';


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

import fire from '../firebase.js'

const db = fire.firestore();

class SearchPreferences extends Component {

  state = {
    location: "",
    interests: [false, false, false, false, false, false, false, false, false, false, false, false, false],
  };

  changeState(value) {
     this.setState(update(this.state, {
       interests: {
         [value]: {
           $set : !this.state.interests[value]
         }
       }
     }));
     this.firebase_update();
   }

   firebase_update = (user) => {
         let interests = this.state.interests
         let location = this.state.location

         var db = fire.firestore()

         fire.auth().onAuthStateChanged(function(user) {
           if (user) {

         db.collection("Users").doc(user.uid).update({
           interests: interests,
           Location: location
           }, {merge: true}).then(() => {
             console.log("Document successfully updated!")
           })
           .catch((error) => {
              console.log("Error updating documents: ", error)
           })
           } else {
              console.log("User not logged in")
           }
         });
         console.log(this.state.email)
     }

     keepintrs(){
        let curuser = fire.auth().currentUser
        if (curuser){
            db.collection("Users").doc(curuser.uid).get().then((doc) => {
                let intrdata = doc.data().interests
                console.log(intrdata);
                for (let i = 0; i < intrdata.length; i++){
                    this.setState(update(this.state, {
                        interests: {
                            [i]: {
                                $set : intrdata[i]
                            }
                        }
                    }));
                }
                this.setState({location: doc.data().Location});
            });
        }
        else{
            console.log("no user")
        }
     }

  async componentDidMount() {
      this.keepintrs();
    }



  render() {
    //this.keepintrs()
    return (
      <div className="search-preferences">
        <Background />
        <div className="my-interests">My Interests</div>
        
        <div className="search-preferences-tags">
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

        <div className="my-location">My Location</div>
        <input placeholder="San Luis Obispo, CA, US" className="my-location-box" type="location" value={this.location} onChange={(e) => this.setState({location: e.target.value })}/>

        <img className="scooter-img" src={scooterImg} alt="scooter img"/>
        <TabBar />
      </div>
    );
  }
}
export default SearchPreferences;

function Background() {
  return (
    <div>
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background" />
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background" />
      <h1 className="title">Search Preferences</h1>
      <Link to="/home">
        <img className="x" src={xIcon} alt="x icon" />
      </Link>
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
          <img className="profile-icon" src={profileIcon} alt="profile icon" />
          <div className="profile">Profile</div>
        </div>
      </div>
    </div>
  );
}
