import "../css/Explore.css";
import "../css/background.css";
import "../css/tabBarExplore.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import whiteBackground from "../resources/background-Resources/whiteBackground.svg";
import dotsStarsBackground from "../resources/background-Resources/dotsStars.svg";

import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import planIcon from "../resources/tabBar-Resources/planIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profile.svg";
import explorePressed from "../resources/tabBar-Resources/explorePressed.svg";

import searchIcon from "../resources/Explore-Resources/searchIcon.svg";
import search from "../resources/Explore-Resources/search.svg";
import street from "../resources/Explore-Resources/street.svg";

class Explore extends Component {
  state = {
      keywords: "",
      minDistance: 0,
      maxDistance: 12430,
      minRating: 1.52,
      numReviews: 0,
  };

  render() {
    return (
      <div className="explore">
        <Background />

        <img className="search-icon" src={searchIcon} alt="search icon"/>
        <input placeholder="enter keywords here" className="keyword-input" type="text" value={this.keywords} onChange={(e) => this.setState({keywords: e.target.value })}/>
        
        <input placeholder="0" className="min-distance" type="number" value={this.minDistance} onChange={(e) => this.setState({minDistance: e.target.value })}/>
        <input placeholder="12430" className="max-distance" type="number" value={this.maxDistance} onChange={(e) => this.setState({maxDistance: e.target.value })}/>
        
        <input type="range" style={{ background: "linear-gradient(90deg, #638073 " + 68.4 * this.state.minRating + "px, #BDCAC2 " + 68.4 * this.state.minRating + "px)"}} className="min-rating-slider" min={0} max={5} value={this.state.minRating} step={.01} onChange={(e) => this.setState({minRating: e.target.value})}/>
        <div className="min-rating">{"> " + this.state.minRating}</div>

        <input placeholder="0" className="num-reviews" type="number" value={this.minDistance} onChange={(e) => this.setState({minDistance: e.target.value })}/>
        
        <img className="search-button" src={search} alt="search button"/>

        <img className="street" src={street} alt="street svg"/>

        <TabBar />
      </div>
    );
  }
}
export default Explore;

function Background() {
  return (
    <div>
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background" />
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background" />
      <h1 className="explore-title">Explore</h1>
    </div>
  );
}

function TabBar() {
  return (
    <div className="tab-bar">
      <div className="white-box">
        <Link to="/plan">
            <img className="explore-plan-icon" src={planIcon} alt="plan icon"/>
        </Link>

        <Link to="/connect">
            <img className="explore-connect-icon" src={connectIcon} alt="connect icon"/>
        </Link>

        <Link to="/home">
            <img className="explore-profile-icon" src={profileIcon} alt="profile icon"/>
        </Link>
        
        <img className="explore-pressed" src={explorePressed} alt="explore pressed icon"/>
      </div>
    </div>
  );
}
