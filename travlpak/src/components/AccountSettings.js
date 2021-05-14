import "../css/AccountSettings.css";
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

import text from  "../resources/AccountSettings-Resources/text.svg";
import saveChanges from  "../resources/AccountSettings-Resources/saveChanges.svg";
import submitRequest from  "../resources/AccountSettings-Resources/submitRequest.svg";
import subway from "../resources/AccountSettings-Resources/subway.svg";

class AccountSettings extends Component {
  state = {
    birthday: "",
  };

  render() {
    return (
      <div className="search-preferences">
        <Background />

        <img className="change-birthday-password" src={text} alt="change birthday password"/>
        <input className="my-birthday-input" type="date" value={this.birthday} onChange={(e) => this.setState({birthday: e.target.value })}/>
        <img className="save-changes-button" src={saveChanges} alt="save changes button" onClick={alert}/>
        <img className="submit-request-button" src={submitRequest} alt="submmit request button" onClick={alert}/>
        <img className="subway" src={subway} alt="submmit request button"/>
        
        <TabBar />
      </div>
    );
  }
}
export default AccountSettings;

function Background() {
  return (
    <div>
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background" />
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background" />
      <h1 className="account-settings-title">Account Settings</h1>
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
          <Link to={"/plan"}>
            <img className="plan-icon" src={planIcon} alt="plan icon"/>
          </Link>

          <Link to={"/connect"}>
            <img className="connect-icon" src={connectIcon} alt="connect icon"/>
          </Link>
          
          <Link to={"/explore"}>
            <img className="explore-icon" src={exploreIcon} alt="explore icon"/>
          </Link>
        </div>
        <div className="tab-pressed" style={{ backgroundImage: `url(${profilePressed})` }}>
          <img className="profile-icon" src={profileIcon} alt="profile icon" />
          <div className="profile">Profile</div>
        </div>
      </div>
    </div>
  );
}
