import "../css/Plan.css";
import "../css/background.css";
import "../css/tabBarPlan.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import whiteBackground from "../resources/background-Resources/whiteBackground.svg";
import dotsStarsBackground from "../resources/background-Resources/dotsStars.svg";

import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profile.svg";
import planPressed from "../resources/tabBar-Resources/planPressed.svg";
import gradient from "../resources/tabBar-Resources/gradient.svg";

import invitationIcon from "../resources/Plan-Resources/invitationIcon.svg";
import calendarIcon from "../resources/Plan-Resources/calendarIcon.svg";
import plusIcon from "../resources/Plan-Resources/plusIcon.svg";

class Plan extends Component {
  state = {};

  render() {
    return (
      <div className="plan">
        <Background />

        <img
          className="invitation-icon"
          src={invitationIcon}
          alt="invitation icon"
        />
        <div className="my-trips">My Trips</div>
        <Link to="/calendar">
          <img
            className="calendar-icon"
            src={calendarIcon}
            alt="calendar icon"
          />
        </Link>

        <Link to="/newTrip">
          <img className="plan-plus-icon" src={plusIcon} alt="plus icon" />
        </Link>

        <TripList />

        <img className="gradient" src={gradient} alt="gradient" />

        <TabBar />
      </div>
    );
  }
}
export default Plan;

function TripList() {
  const trips = [
    {
      tripNumber: 0,
      name: "Summer Break '21",
      destination: "Cabo, Mexico",
      startDate: "07/24/21",
      endDate: "08/4/21",
      percentPlanned: 41,
      participants: ["person 1", "person 2", "person 3"],
    },
    {
      tripNumber: 1,
      name: "New Years 2022",
      destination: "New York City, NY, US",
      startDate: "12/28/21",
      endDate: "01/4/22",
      percentPlanned: 24,
      participants: [
        "person a",
        "person b",
        "person c",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
  ];

  return trips.map((trip) => (
    <Link to="/tripOverview">
      <div className={"trip-" + trip.tripNumber}>
        <svg
          width="342"
          height="1"
          viewBox="0 0 342 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="342" y2="0.5" stroke="#BDCAC2" />
        </svg>

        <h1 className="display-trip-name">{trip.name}</h1>
        <h2 className="display-destination-name">{trip.destination}</h2>
        <p className="display-dates">{trip.startDate + " - " + trip.endDate}</p>

        <div className="percent-planned">
          {trip.percentPlanned + "% planned"}
        </div>
        <div
          style={{
            background:
              "linear-gradient(90deg, #2A6049 " +
              trip.percentPlanned +
              "px, #BDCAC2 " +
              trip.percentPlanned +
              "px)",
          }}
          className="percent-bar"
        ></div>

        <div className="display-num-participants">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="26"
              height="26"
              rx="12"
              fill="white"
              fill-opacity="0.29"
              stroke="#BDCAC2"
            />
          </svg>
        </div>
        <p className="num-participants">{trip.participants.length}</p>
      </div>
    </Link>
  ));
}

function Background() {
  return (
    <div>
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background" />
      <img
        className="dots-stars"
        src={dotsStarsBackground}
        alt="dots stars background"
      />
      <h1 className="plan-title">Plan</h1>
    </div>
  );
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
