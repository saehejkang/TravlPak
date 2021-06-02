import "../css/TripOverview.css";
import "../css/tabBarPlan.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profile.svg";
import planPressed from "../resources/tabBar-Resources/planPressed.svg";

import exitIcon from "../resources/NewTrip-Resources/exitIcon.svg";
import tripOverview from "../resources/TripOverview-Resources/tripOverview.svg";
import dots from "../resources/TripOverview-Resources/dots.svg";
import tripItinerary from "../resources/TripOverview-Resources/tripItinerary.svg";
import deleteTrip from "../resources/TripOverview-Resources/deleteTrip.svg";

class TripOverview extends Component {
  state = {
    name: "Summer Break '21",
    destination: "Cabo, Mexico",
    startDate: "07/24",
    endDate: "08/04",
    notes: "",
    percentPlanned: 0,
    participants: [],
  };
  

  render() {
    return (
      <div className="plan">

        <Link to="/plan">
            <img className="green-exit-icon" src={exitIcon} alt="exit icon"/>
        </Link>
        
        <img className="trip-overview" src={tripOverview} alt="trip overview"/>
        <p className="overview-location">{this.state.destination}</p>

        <p className="overview-start-date">{this.state.startDate}</p>
        <p className="overview-end-date">{this.state.endDate}</p>

        <textarea placeholder="add notes about your trip here" className="overview-notes-box" type="text" value={this.state.notes} onChange={(e) => this.setState({ notes: e.target.value })}/>
        
        <img className="trip-itinerary-button" src={tripItinerary} alt="trip itinerary button"/>
        
        <ParticipantsList />
        <Link to="">
            <img className="dots-three" src={dots} alt="dots three"/>
        </Link>

        <img className="delete-trip-button" src={deleteTrip} alt="delete trip button"/>

        <TabBar />
      </div>
    );
  }
}
export default TripOverview;

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
                <div className={"overview-participant-" + participant.participantNumber}>
                    <img className="new-trip-profile-pic" src={participant.profilePicture} alt="profile pic"/>
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
