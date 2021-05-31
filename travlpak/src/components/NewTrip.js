import "../css/NewTrip.css";
import "../css/tabBarPlan.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profile.svg";
import planPressed from "../resources/tabBar-Resources/planPressed.svg";
//import gradient from "../resources/tabBar-Resources/gradient.svg";

import exitIcon from "../resources/NewTrip-Resources/exitIcon.svg";
import newTrip from "../resources/NewTrip-Resources/newTrip.svg";
import removeIcon from "../resources/NewTrip-Resources/xIcon.svg";
import addIcon from "../resources/NewTrip-Resources/addIcon.svg";
import arrowButton from "../resources/CreateProfile-Resources/arrowButton.svg";

class NewTrip extends Component {
  state = {
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    percentPlanned: 0,
    participants: [],
  };

  render() {
    return (
      <div className="plan">
        <img className="new-trip-bg" src={newTrip} alt="new trip" />

        <Link to="/plan">
          <img className="green-exit-icon" src={exitIcon} alt="exit icon" />
        </Link>

        <input
          placeholder="Spring Break :)"
          className="trip-name-input"
          type="text"
          value={this.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          placeholder="San Luis Obispo, CA, US"
          className="destination-input"
          type="location"
          value={this.destination}
          onChange={(e) => this.setState({ destination: e.target.value })}
        />

        <input
          className="start-date-input"
          type="date"
          value={this.destination}
          onChange={(e) => this.setState({ destination: e.target.value })}
        />
        <input
          className="end-date-input"
          type="date"
          value={this.destination}
          onChange={(e) => this.setState({ destination: e.target.value })}
        />

        <div className="friends-scrollable">
          <ParticipantsList />
        </div>

        <Link to="/plan">
          <img
            className="create-trip-button"
            src={arrowButton}
            alt="arrow button"
          />
        </Link>

        <TabBar />
      </div>
    );
  }
}
export default NewTrip;

function ParticipantsList() {
  const friends = [
    {
      friendNumber: 0,
      firstName: "Cory",
      lastName: "Rincon",
      profilePicture:
        "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
      participant: true,
    },
    {
      friendNumber: 1,
      firstName: "Matthew",
      lastName: "Hamilton",
      profilePicture:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
      participant: true,
    },
    {
      friendNumber: 2,
      firstName: "Annie",
      lastName: "Spratt",
      profilePicture:
        "https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1148&q=80",
      participant: false,
    },
    {
      friendNumber: 3,
      firstName: "Kalen",
      lastName: "Emsley",
      profilePicture:
        "https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
      participant: false,
    },
    {
      friendNumber: 4,
      firstName: "Jonathan",
      lastName: "Cooper",
      profilePicture:
        "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
      participant: false,
    },
    {
      friendNumber: 5,
      firstName: "Emanuela",
      lastName: "Picone",
      profilePicture:
        "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      participant: false,
    },
    {
      friendNumber: 6,
      firstName: "Dan",
      lastName: "Freeman",
      profilePicture:
        "https://images.unsplash.com/photo-1517847624229-2885be08059a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
      participant: false,
    },
    {
      friendNumber: 7,
      firstName: "Jovan",
      lastName: "Vasiljević",
      profilePicture:
        "https://images.unsplash.com/photo-1615586183480-f1f2f34c1419?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
      participant: false,
    },
  ];

  return friends.map((participant) => (
    <div className={"participant-" + participant.friendNumber}>
      <div className="new-trip-divider">
        <svg
          width="342"
          height="1"
          viewBox="0 0 342 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="342" y2="0.5" stroke="#BDCAC2" />
        </svg>
      </div>

      <img
        className="new-trip-profile-pic"
        src={participant.profilePicture}
        alt="profile pic"
      />
      <h1 className="new-trip-participant-name">
        {participant.firstName + " " + participant.lastName}
      </h1>
      <img
        className={
          participant.participant
            ? "remove-participant-icon"
            : "add-participant-icon"
        }
        src={participant.participant ? removeIcon : addIcon}
        alt="remove/add participant icon"
        onClick={(participant.participant = false)}
      />
    </div>
  ));
}

function TabBar() {
  return (
    <div className="tab-bar">
      <div className="white-box">
        <Link to="/home">
          <img
            className="plan-profile-icon"
            src={profileIcon}
            alt="plan icon"
          />
        </Link>

        <Link to="/connect">
          <img className="connect-icon" src={connectIcon} alt="connect icon" />
        </Link>

        <Link to="/explore">
          <img className="explore-icon" src={exploreIcon} alt="explore icon" />
        </Link>

        <img className="plan-pressed" src={planPressed} alt="plan pressed" />
      </div>
    </div>
  );
}
