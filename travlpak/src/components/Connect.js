import "../css/Connect.css";
import "../css/background.css";
import "../css/tabBarConnect.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import whiteBackground from "../resources/background-Resources/whiteBackground.svg";
import dotsStarsBackground from "../resources/background-Resources/dotsStars.svg";

import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import planIcon from "../resources/tabBar-Resources/planIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profile.svg";
import connectPressed from "../resources/tabBar-Resources/connectPressed.svg";

import bellIcon from "../resources/Connect-Resources/bellIcon.svg";
import chatIcon from "../resources/Connect-Resources/chatIcon.svg";
import plusIcon from "../resources/Connect-Resources/plusIcon.svg";

class Connect extends Component {
  state = {
  };

  render() {
    return (
      <div className="connect">
        <Background />
        <img className="bell-icon" src={bellIcon} alt="bell icon"/>
        <div className="global-posts">Global Posts</div>
        <img className="connect-chat-icon" src={chatIcon} alt="chat icon"/>
        <img className="connect-plus-icon" src={plusIcon} alt="plus icon"/>

        <TabBar />
      </div>
    );
  }
}
export default Connect;

function Background() {
  return (
    <div>
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background" />
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background" />
      <h1 className="connect-title">Connect</h1>
    </div>
  );
}

function TabBar() {
  return (
    <div className="tab-bar">
      <div className="white-box">
        <Link to="/plan">
            <img className="connect-plan-icon" src={planIcon} alt="plan icon"/>
        </Link>

        <Link to="/home">
            <img className="connect-profile-icon" src={profileIcon} alt="connect icon"/>
        </Link>

        <Link to="/explore">
            <img className="explore-icon" src={exploreIcon} alt="explore icon"/>
        </Link>
        
        <img className="connect-pressed" src={connectPressed} alt="profile icon" />
      </div>
    </div>
  );
}
