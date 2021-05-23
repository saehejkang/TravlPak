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
import selectionBarFriends from "../resources/MessageCenter-Resources/selectionBarFriends.svg";

class MessageCenter extends Component {
  state = {
  };

  render() {
    return (
      <div className="connect">
        <Background />

        <Link to="/connect">
            <img className="white-exit-icon" src={xIcon} alt="exit icon"/>
        </Link>
        
        <img className="selection-bar-message-center" src={selectionBarFriends} alt="selection bar"/>
        
        <Link to="/messageCenterTrips">
          <p className="trips-selector">Trips</p>
        </Link>

        <FriendMessages />
        <img className="gradient" src={gradient} alt="gradient"/>

        <TabBar />
      </div>
    );
  }
}
export default MessageCenter;

function FriendMessages() {
    const friends = [
        {
            friendNumber: 0,
            firstName: "Cory",
            lastName: "Rincon",
            profilePicture: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
            lastMessage: "we can plan for the second week in...",
            new: true,
        },
        {
            friendNumber: 1,
            firstName: "Matthew",
            lastName: "Hamilton",
            profilePicture: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
            lastMessage: "definitely :)",
            new: false,
        },
        {
            friendNumber: 2,
            firstName: "Annie",
            lastName: "Spratt",
            profilePicture: "https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1148&q=80",
            lastMessage: "of course, I'll invite you right now!",
            new: false,
        },
        {
            friendNumber: 3,
            firstName: "Kalen",
            lastName: "Emsley",
            profilePicture: "https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
            lastMessage: "should I go ahead and add Annie?",
            new: true,
        },
        {
            friendNumber: 4,
            firstName: "Jonathan",
            lastName: "Cooper",
            profilePicture: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
            lastMessage: "ok, I'll put it on the message board.",
            new: false,
        },
        {
            friendNumber: 5,
            firstName: "Emanuela",
            lastName: "Picone",
            profilePicture: "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
            lastMessage: "I just checked the flights, we might...",
            new: false,
        },
        {
            friendNumber: 6,
            firstName: "Dan",
            lastName: "Freeman",
            profilePicture: "https://images.unsplash.com/photo-1517847624229-2885be08059a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
            lastMessage: "It's a really spectacular place, can't wait",
            new: false,
        },
        {
            friendNumber: 7,
            firstName: "Jovan",
            lastName: "Vasiljević",
            profilePicture: "https://images.unsplash.com/photo-1615586183480-f1f2f34c1419?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
            lastMessage: "I'm going to be back in two weeks, do...",
            new: false,
        },
    ]

    return (
        friends.map(
            friend => (
              <Link to="/chat">
                <div className={"message-friend-" + friend.friendNumber}>
                    <img className="message-friend-profile-picture" src={friend.profilePicture} alt="profile pic"/>
                    <p className="message-friend-name">{friend.firstName + " " + friend.lastName}</p>
                    <p className={friend.new ? "message-new" : "message-old"}>{friend.lastMessage}</p>
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
