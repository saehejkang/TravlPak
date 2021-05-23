import "../css/MessageCenter.css";
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
import gradient from "../resources/tabBar-Resources/gradient.svg";

import xIcon from "../resources/MessageCenter-Resources/xIcon.svg";
import selectionBarTrips from "../resources/MessageCenter-Resources/selectionBarTrips.svg";

class MessageCenterTrips extends Component {
  state = {
  };

  render() {
    return (
      <div className="connect">
        <Background />

        <Link to="/connect">
            <img className="white-exit-icon" src={xIcon} alt="exit icon"/>
        </Link>

        <img className="selection-bar-message-center" src={selectionBarTrips} alt="selection bar"/>

        <Link to="/messageCenterFriends">
          <p className="friends-selector">Friends</p>
        </Link>

        <TripMessages />
        <img className="gradient" src={gradient} alt="gradient"/>

        <TabBar />
      </div>
    );
  }
}
export default MessageCenterTrips;

function TripMessages() {
    const trips = [
      {
          tripMessageNumber: 0,
          destination: "Antigua, Leeward Islands",
          participantProfilePics: ["https://images.unsplash.com/photo-1517847624229-2885be08059a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80", "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80", "https://images.unsplash.com/photo-1615586183480-f1f2f34c1419?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"],
          lastMessage: "last message goes here, bold if new",
          new: true,
      },
      {
        tripMessageNumber: 1,
        destination: "Cabo, Mexico",
        participantProfilePics: ["https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80", "https://www.houseofcharity.org/wp-content/uploads/2019/07/White-Square.jpg", "https://www.houseofcharity.org/wp-content/uploads/2019/07/White-Square.jpg"],
        lastMessage: "last message goes here, bold if new",
        new: false,
      },
      {
        tripMessageNumber: 2,
        destination: "Sao Jorge, Azores, Portugal",
        participantProfilePics: ["https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80", "https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1148&q=80", "https://www.houseofcharity.org/wp-content/uploads/2019/07/White-Square.jpg"],
        lastMessage: "last message goes here, bold if new",
        new: false,
      },
    ]

    return (
        trips.map(
            trip => (
              <Link to="/chat">
                <div className={"message-friend-" + trip.tripMessageNumber}>
                  <div className={"trip-participant-picture-2"}>
                    <img className="message-friend-profile-picture" src={trip.participantProfilePics[2]} alt="profile pic"/>
                  </div>
                  <div className={"trip-participant-picture-1"}>
                    <img className="message-friend-profile-picture" src={trip.participantProfilePics[1]} alt="profile pic"/>
                  </div>
                  <div className={"trip-participant-picture-0"}>
                    <img className="message-friend-profile-picture" src={trip.participantProfilePics[0]} alt="profile pic"/>
                  </div>
                  <p className="message-trip-name">{trip.destination}</p>
                  <p className={trip.new ? "message-trips-new" : "message-trips-old"}>{trip.lastMessage}</p>
                  <div className="message-divider">
                      <svg width="358" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line y1="0.5" x2="358" y2="0.5" stroke="#BDCAC2"/>
                      </svg>
                  </div>
                </div>
              </Link>
            )
        )
    )
}

function Background() {
  return (
    <div>
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background" />
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background" />
      <h1 className="message-center-title">Message Center</h1>
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
