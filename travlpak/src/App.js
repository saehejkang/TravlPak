import React from "react";
import "./css/style.css";

import map from "./resources/map.svg";
import pictureFrame from "./resources/pictureFrame.svg";
import menuIcon from "./resources/menuIcon.svg";
import greenBox from "./resources/greenBox.svg";
import greenPattern from "./resources/greenPattern.svg";
import orangeBox from "./resources/orangeBox.svg";
import orangePattern from "./resources/orangePattern.svg";
import circle from "./resources/circle.svg";
import exploreIcon from "./resources/tabBar/exploreIcon.svg";
import connectIcon from "./resources/tabBar/connectIcon.svg";
import planIcon from "./resources/tabBar/planIcon.svg";
import profileIcon from "./resources/tabBar/profileIcon.svg";
import profilePressed from "./resources/tabBar/profilePressed.svg";
import Register from "./components/Register";

import "./css/style.css";

function App() {
  return <Home {...homeData} />;
}

export default App;

function Home(props) {
  const {
    aboutMeTitle,
    aboutMeText,
    profilePictureImage,
    greetingHello,
    greetingName,
    friendRequestsTitle,
    friendRequestsNumber,
    newMessagesTitle,
    newMessagesNumber,
    plannedTripsTitle,
    plannedTripsNumber,
    tripsTakenTitle,
    tripsTakenNumber,
    savedLocationsTitle,
    savedLocationsNumber,
    countriesTraveledTitle,
    countriesTraveledNumber,
    flightsBoardedTitle,
    flightsBoardedNumber,
    profileText,
  } = props;

  return (
    <div className="home">
      <div className="map" style={{ backgroundImage: `url(${map})` }}>
        <div className="overlap-group6">
          <div className="bio">
            <div className="bio-item sfprotext-bold-outer-space-18px">
              {aboutMeTitle}
            </div>
            <p className="bio-item sfprotext-regular-normal-outer-space-13px">
              {aboutMeText}
            </p>
          </div>
          <div className="profile-pic-frame">
            <div>
              <div className="frame">
                <div
                  className="overlap-group2"
                  style={{ backgroundImage: `url(${pictureFrame})` }}
                ></div>
              </div>
              <img
                className="circle"
                src={circle}
                alt="profile pic circle border"
              />
              <img
                className="profile-pic"
                src={profilePictureImage}
                alt="profile pic"
              />
            </div>
          </div>
          <div className="greeting">
            <div className="hello sfprodisplay-light-outer-space-18px">
              {greetingHello}
            </div>
            <h1 className="title sfprodisplay-bold-outer-space-24px">
              {greetingName}
            </h1>
          </div>
        </div>
        <div className="three-line-icon">
          <img className="vector-2" src={menuIcon} alt="menu icon" />
        </div>
      </div>
      <div className="three-box-group">
        <div className="friends border-1px-stromboli">
          <div className="weight sfprotext-bold-stromboli-13px">
            {friendRequestsTitle}
          </div>
          <div className="x45 sfprotext-bold-asphalt-20px">
            {friendRequestsNumber}
          </div>
        </div>
        <div className="messages border-1px-stromboli">
          <div className="new-messages-title sfprotext-bold-stromboli-13px">
            {newMessagesTitle}
          </div>
          <div className="new-messages-number sfprotext-bold-asphalt-20px">
            {newMessagesNumber}
          </div>
        </div>
        <div className="requests border-1px-stromboli">
          <div className="planned-trips sfprotext-bold-stromboli-13px">
            {plannedTripsTitle}
          </div>
          <div className="number-3 sfprotext-bold-asphalt-20px">
            {plannedTripsNumber}
          </div>
        </div>
      </div>
      <div className="four-box-group">
        <div className="flex-col">
          <div className="trips-taken">
            <div
              className="trips-taken-box"
              style={{ backgroundImage: `url(${greenBox})` }}
            >
              <div className="flex-col-3">
                <div className="trips-taken-1 sfprotext-bold-white-16px">
                  {tripsTakenTitle}
                </div>
                <div className="number-1 sfprotext-heavy-normal-white-24px">
                  {tripsTakenNumber}
                </div>
              </div>
              <img
                className="pattern"
                src={greenPattern}
                alt="trips taken pattern"
              />
            </div>
          </div>
          <div className="saved-locations">
            <div
              className="overlap-group-2"
              style={{ backgroundImage: `url(${orangeBox})` }}
            >
              <div className="overlap-group-3">
                <img
                  className="orange-pattern"
                  src={orangePattern}
                  alt="saved locations pattern"
                />
                <div className="saved-locations-1 sfprotext-bold-white-16px">
                  {savedLocationsTitle}
                </div>
              </div>
              <div className="number-2 sfprotext-heavy-normal-white-24px">
                {savedLocationsNumber}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col-2">
          <div className="contries-traveled">
            <div
              className="overlap-group-2"
              style={{ backgroundImage: `url(${greenBox})` }}
            >
              <div className="overlap-group-3">
                <img
                  className="pattern-1"
                  src={greenPattern}
                  alt="countries traveled pattern"
                />
                <div className="countries-traveled sfprotext-bold-white-16px">
                  {countriesTraveledTitle}
                </div>
              </div>
              <div className="number-2 sfprotext-heavy-normal-white-24px">
                {countriesTraveledNumber}
              </div>
            </div>
          </div>
          <div className="flights-box">
            <div
              className="overlap-group-1"
              style={{ backgroundImage: `url(${greenBox})` }}
            >
              <div className="flex-col-1">
                <div className="flights-boarded sfprotext-bold-white-16px">
                  {flightsBoardedTitle}
                </div>
                <div className="number-1 sfprotext-heavy-normal-white-24px">
                  {flightsBoardedNumber}
                </div>
              </div>
              <img
                className="pattern-2"
                src={greenPattern}
                alt="flights boarded pattern"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tab-bar">
        <div className="overlap-group1">
          <div className="icons">
            <img className="vector-1" src={exploreIcon} alt="explore icon" />
            <img className="vector" src={connectIcon} alt="connect icon" />
            <img className="vector-3" src={planIcon} alt="plan icon" />
            <div
              className="group"
              style={{ backgroundImage: `url(${profilePressed})` }}
            >
              <img src={profileIcon} alt="profile icon" />
              <div className="profile sfprotext-normal-white-16px">
                {profileText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const homeData = {
  aboutMeTitle: "about me",
  aboutMeText: "I'm trying to make it to 100 countries!",
  profilePictureImage:
    "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
  greetingHello: "Hello,",
  greetingName: "TravlPak",
  friendRequestsTitle: (
    <>
      Friend
      <br />
      Requests
    </>
  ),
  friendRequestsNumber: "12",
  newMessagesTitle: (
    <>
      New
      <br />
      Messages
    </>
  ),
  newMessagesNumber: "2",
  plannedTripsTitle: (
    <>
      Planned
      <br />
      Trips
    </>
  ),
  plannedTripsNumber: "1",
  tripsTakenTitle: (
    <>
      trips
      <br />
      taken
    </>
  ),
  tripsTakenNumber: "6",
  savedLocationsTitle: (
    <>
      saved <br />
      locations
    </>
  ),
  savedLocationsNumber: "2",
  countriesTraveledTitle: (
    <>
      countries
      <br />
      traveled
    </>
  ),
  countriesTraveledNumber: "4",
  flightsBoardedTitle: (
    <>
      flights <br />
      boarded
    </>
  ),
  flightsBoardedNumber: "9",
  profileText: "Profile",
};
