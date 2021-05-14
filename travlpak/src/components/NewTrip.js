import "../css/NewTrip.css";
import "../css/tabBarPlan.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profile.svg";
import planPressed from "../resources/tabBar-Resources/planPressed.svg";
import gradient from "../resources/tabBar-Resources/gradient.svg";

import exitIcon from "../resources/NewTrip-Resources/exitIcon.svg";
import newTrip from "../resources/NewTrip-Resources/newTrip.svg";
import removeIcon from "../resources/NewTrip-Resources/xIcon.svg";
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
        <img className="new-trip-bg" src={newTrip} alt="new trip"/>

        <Link to="/plan">
            <img className="green-exit-icon" src={exitIcon} alt="exit icon"/>
        </Link>
        
        <input placeholder="Spring Break :)" className="trip-name-input" type="text" value={this.name} onChange={(e) => this.setState({ name: e.target.value })}/>
        <input placeholder="San Luis Obispo, CA, US" className="destination-input" type="location" value={this.destination} onChange={(e) => this.setState({ destination: e.target.value })}/>

        <input className="start-date-input" type="date" value={this.destination} onChange={(e) => this.setState({ destination: e.target.value })}/>
        <input className="end-date-input" type="date" value={this.destination} onChange={(e) => this.setState({ destination: e.target.value })}/>

        <div className="add-participant-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 9.33333V22.6667M9.33333 16H22.6667M4.33333 1H27.6667C29.5076 1 31 2.49238 31 4.33333V27.6667C31 29.5076 29.5076 31 27.6667 31H4.33333C2.49238 31 1 29.5076 1 27.6667V4.33333C1 2.49238 2.49238 1 4.33333 1Z" stroke="#638074" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <ParticipantsList />

        <Link to="/plan">
            <div className="gradient">
                <img src={gradient} alt="gradient"/>
                <img className="create-trip-button" src={arrowButton} alt="arrow button" />
            </div>
        </Link>

        <TabBar />
      </div>
    );
  }
}
export default NewTrip;

function ParticipantsList() {
    const participants = [
        {
            participantNumber: 0,
            name: "Maddie Hamilton",
            profilePicture: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
        },
        {
            participantNumber: 1,
            name: "César Rincón",
            profilePicture: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
        },
    ]

    return (
        participants.map(
            participant => (
                <div className={"participant-" + participant.participantNumber}>
                    <div className="new-trip-divider">
                        <svg width="342" height="1" viewBox="0 0 342 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="342" y2="0.5" stroke="#BDCAC2"/>
                        </svg>
                    </div>

                    <img className="new-trip-profile-pic" src={participant.profilePicture} alt="profile pic"/>
                    <h1 className="new-trip-participant-name">{participant.name}</h1>
                    <img className="remove-participant-icon" src={removeIcon} alt="remove participant icon"/>
                </div>
            )
        )
    )

}

function TabBar() {
  return (
    <div className="tab-bar">
      <div className="white-box">
        <Link to="/home">
            <img className="plan-profile-icon" src={profileIcon} alt="plan icon"/>
        </Link>
        
        <Link to="/connect">
            <img className="connect-icon" src={connectIcon} alt="connect icon"/>
        </Link>

        <Link to="/explore">
            <img className="explore-icon" src={exploreIcon} alt="explore icon"/>
        </Link>
        
        <img className="plan-pressed" src={planPressed} alt="plan pressed" />
      </div>
    </div>
  );
}
