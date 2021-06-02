import "../css/NewTrip.css";
import "../css/tabBarPlan.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import connectIcon from "../resources/tabBar-Resources/connectIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profile.svg";
import planPressed from "../resources/tabBar-Resources/planPressed.svg";

import exitIcon from "../resources/NewTrip-Resources/exitIcon.svg";
import newTrip from "../resources/NewTrip-Resources/newTrip.svg";
import removeIcon from "../resources/NewTrip-Resources/xIcon.svg";

import addIcon from "../resources/NewTrip-Resources/addIcon.svg";
import arrowButton from "../resources/CreateProfile-Resources/arrowButton.svg";
import fire from "../firebase.js";
import firebase from 'firebase/app'
import update from 'react-addons-update';

const db = fire.firestore();


class NewTrip extends Component {
  state = {
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    percentPlanned: 0,
    people: [],
    participants: [],
    index: 0
  };


   firebase_update = (user) => {
        let name = this.state.name
        let destination  = this.state.destination
        let startDate = this.state.startDate
        let endDate = this.state.endDate
        let percentPlanned = this.state.percentPlanned
        let participants = this.state.people
        let index = this.state.index
        let tripnum = (Math.floor((Math.random() * 100000) + 1)).toString()

        console.log("number " + tripnum)

        var db = fire.firestore()

        fire.auth().onAuthStateChanged(function(user) {
          if (user) {
            db.collection("Users").doc(user.uid).update({
              trips: firebase.firestore.FieldValue.arrayUnion(tripnum)
            }).catch((error) => {
              console.log(error)
            })

            db.collection("trips").doc(tripnum).set({
              tripNumber: index,
              name: name,
              Destination: destination,
              startDate: startDate,
              endDate: endDate,
              percentPlanned: percentPlanned,
              participants: participants,
              }).then(() => {
              console.log("Document successfully updated!")
              })
            .catch((error) => {
              console.log("Error updating documents: ", error)
            })
         } else {
             console.log("User not logged in")
          }
        });
    }

  async componentDidMount() {
    this.getUserData()
  }

  getUserData() {
    let user = fire.auth().currentUser
    if (user) {
      db.collection("Users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          this.setState({
            index: doc.data().trips.length
          })
          console.log(this.state.index)
          this.friendList(doc.data().friends)
      });
    }
    else {
      console.log("no user")
    }
  }

  friendList(data) {
    for (let i = 0; i < data.length; i++) {
      db.collection("Users")
        .doc(data[i])
        .get()
        .then((doc) => {
          this.getPic(data[i], doc.data(), i)
        });
    }
  }

  getPic(uid, user, index) {
    var friend = {}
    fire.storage().ref("ProfilePicutres/" + uid).getDownloadURL()
      .then((imgURL) => {
        friend.firstName = user.FirstName
        friend.lastName = user.LastName
        friend.friendNumber = index
        friend.participant = false
        friend.profilePicture = imgURL
        var arr = this.state.participants.concat(friend)
        
        this.setState({participants: arr})
        console.log(this.state.participants)
      })
      .catch((error) => {
        console.log(error)
        friend.firstName = user.FirstName
        friend.lastName = user.LastName
        friend.friendNumber = index
        friend.participant = false
        friend.profilePicture = "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        var arr = this.state.participants.concat(friend)
        this.setState({participants: arr})
    })
  }

  changeState(index) {
    let arr = this.state.participants
    let temp = this.state.participants[index]
    temp.participant = !temp.participant
    arr[index] = temp
    console.log(arr)
    var people = []
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].participant)
        people.push(arr[i])
    }
    for (let j = 0; j < people.length; j++) {
      if (people[j].participant === false)
        people.splice(j, 1)
    }
    this.setState({
      participants: arr,
      people: people
    })
  }

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
          onChange={(e) => this.setState({ startDate: e.target.value })}
        />
        <input
          className="end-date-input"
          type="date"
          value={this.destination}
          onChange={(e) => this.setState({ endDate: e.target.value })}
        />

        <div className="friends-scrollable">

          {this.state.participants.map(
            (participant, index) => (
                <div className={"participant-" + participant.friendNumber}>
                    <div className="new-trip-divider">
                        <svg width="342" height="1" viewBox="0 0 342 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="342" y2="0.5" stroke="#BDCAC2"/>
                        </svg>
                    </div>

                    <img className="new-trip-profile-pic" src={participant.profilePicture} alt="profile pic"/>
                    <h1 className="new-trip-participant-name">{participant.firstName + " " + participant.lastName}</h1>
                    <img className={participant.participant ? "remove-participant-icon" : "add-participant-icon"} src={participant.participant ? removeIcon : addIcon} alt="remove/add participant icon" onClick={(e) => this.changeState(index)} />
                </div>
            )
          )}

        </div>

        <Link to="/plan">
          <img className="create-trip-button" src={arrowButton} alt="arrow button" onClick={this.firebase_update}/>     

        </Link>

        <TabBar />
      </div>
    );
  }
}
export default NewTrip;

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
