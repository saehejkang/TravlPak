import './Home.css';

import map from './resources/map.svg';
import pictureFrame from './resources/pictureFrame.svg';
import menuIcon from './resources/menuIcon.svg';
import greenBox from './resources/greenBox.svg';
import greenPattern from './resources/greenPattern.svg';
import orangeBox from './resources/orangeBox.svg';
import orangePattern from './resources/orangePattern.svg';
import circle from './resources/circle.svg';
import exploreIcon from './resources/tabBar/exploreIcon.svg';
import connectIcon from './resources/tabBar/connectIcon.svg';
import planIcon from './resources/tabBar/planIcon.svg';
import profileIcon from './resources/tabBar/profileIcon.svg';
import profilePressed from './resources/tabBar/profilePressed.svg';

function Home() {
  return (
    <div className="home">
      <MapSection {...mapSectionData} />
      <ThreeBoxGroup {...threeBoxGroupData} />
      <FourBoxGroup {...fourBoxGroupData} />
      <TabBar />
    </div>
  );
}

function MapSection(props) {
  const {
    aboutMeText,
    profilePictureImage,
    greetingName,
  } = props;

  return (
    <div className="map" style={{ backgroundImage: `url(${map})` }}>
      <div className="overlap-group6">
        <div className="bio">
          <div className="bio-item sfprotext-bold-outer-space-18px">about me</div>
          <p className="bio-item sfprotext-regular-normal-outer-space-13px">{aboutMeText}</p>
        </div>
        <div className="profile-pic-frame">
          <div>
            <div className="frame">
              <div className="overlap-group2" style={{ backgroundImage: `url(${pictureFrame})` }}>
              </div>
            </div>
            <img
              className="circle"
              src={circle}
              alt="profile pic circle border"
            />
            <img className="profile-pic" src={profilePictureImage} alt="profile pic"/>
          </div>
        </div>
        <div className="greeting">
          <div className="hello sfprodisplay-light-outer-space-18px">Hello,</div>
          <h1 className="title sfprodisplay-bold-outer-space-24px">{greetingName}</h1>
        </div>
      </div>
      <div className="three-line-icon">
          <img className="vector-2" src={menuIcon} alt="menu icon"/>
      </div>
    </div>
  );
}

function ThreeBoxGroup(props) {
  const {
    friendRequestsNumber,
    newMessagesNumber,
    plannedTripsNumber,
  } = props;

  return (
    <div className="three-box-group">
      <div className="friends border-1px-stromboli">
        <div className="weight sfprotext-bold-stromboli-13px">{<>Friend<br />Requests</>}</div>
        <div className="x45 sfprotext-bold-asphalt-20px">{friendRequestsNumber}</div>
      </div>
      <div className="messages border-1px-stromboli">
        <div className="new-messages-title sfprotext-bold-stromboli-13px">{<>New<br />Messages</>}</div>
        <div className="new-messages-number sfprotext-bold-asphalt-20px">{newMessagesNumber}</div>
      </div>
      <div className="requests border-1px-stromboli">
        <div className="planned-trips sfprotext-bold-stromboli-13px">{<>Planned<br />Trips</>}</div>
        <div className="number-3 sfprotext-bold-asphalt-20px">{plannedTripsNumber}</div>
      </div>
    </div>  
  );
}

function FourBoxGroup(props) {
  const {
    tripsTakenNumber,
    savedLocationsNumber,
    countriesTraveledNumber,
    flightsBoardedNumber,
  } = props;

  return (
    <div className="four-box-group">
      <div className="flex-col">
        <div className="trips-taken">
          <div className="trips-taken-box" style={{ backgroundImage: `url(${greenBox})` }}>
            <div className="flex-col-3">
              <div className="trips-taken-1 sfprotext-bold-white-16px">{<>trips<br />taken</>}</div>
              <div className="number-1 sfprotext-heavy-normal-white-24px">{tripsTakenNumber}</div>
            </div>
            <img className="pattern" src={greenPattern} alt="trips taken pattern"/>
          </div>
        </div>
        <div className="saved-locations">
          <div className="overlap-group-2" style={{ backgroundImage: `url(${orangeBox})` }}>
            <div className="overlap-group-3">
              <img className="orange-pattern" src={orangePattern} alt="saved locations pattern"/>
              <div className="saved-locations-1 sfprotext-bold-white-16px">{<>saved <br />locations</>}</div>
            </div>
            <div className="number-2 sfprotext-heavy-normal-white-24px">{savedLocationsNumber}</div>
          </div>
        </div>
      </div>
      <div className="flex-col-2">
        <div className="contries-traveled">
          <div className="overlap-group-2" style={{ backgroundImage: `url(${greenBox})` }}>
            <div className="overlap-group-3">
              <img className="pattern-1" src={greenPattern} alt="countries traveled pattern"/>
              <div className="countries-traveled sfprotext-bold-white-16px">{<>countries<br />traveled</>}</div>
            </div>
            <div className="number-2 sfprotext-heavy-normal-white-24px">{countriesTraveledNumber}</div>
          </div>
        </div>
        <div className="flights-box">
          <div className="overlap-group-1" style={{ backgroundImage: `url(${greenBox})` }}>
            <div className="flex-col-1">
              <div className="flights-boarded sfprotext-bold-white-16px">{<>flights <br />boarded</>}</div>
              <div className="number-1 sfprotext-heavy-normal-white-24px">{flightsBoardedNumber}</div>
            </div>
            <img className="pattern-2" src={greenPattern} alt="flights boarded pattern"/>
          </div>
        </div>
      </div>
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
            <img className="profile-icon" src={profileIcon} alt="profile icon"/>
            <div className="profile sfprotext-normal-white-16px">Profile</div>
          </div>
        </div>
      </div>
  );
}

const mapSectionData = {
  aboutMeText: "I'm trying to make it to 100 countries!",
  profilePictureImage: "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
  greetingName: "TravlPak",
};

const threeBoxGroupData = {
  friendRequestsNumber: "12",
  newMessagesNumber: "2",
  plannedTripsNumber: "1",
};

const fourBoxGroupData = {
  tripsTakenNumber: "6",
  savedLocationsNumber: "2",
  countriesTraveledNumber: "4",
  flightsBoardedNumber: "9",
};
