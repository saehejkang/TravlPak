import "../css/Connect.css";
import "../css/background.css";
import "../css/tabBarConnect.css";

import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Component } from "react";

import firebase from '../firebase.js'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import whiteBackground from "../resources/background-Resources/whiteBackground.svg";
import dotsStarsBackground from "../resources/background-Resources/dotsStars.svg";

import exploreIcon from "../resources/tabBar-Resources/exploreIcon.svg";
import planIcon from "../resources/tabBar-Resources/planIcon.svg";
import profileIcon from "../resources/tabBar-Resources/profile.svg";
import connectPressed from "../resources/tabBar-Resources/connectPressed.svg";

import bellIcon from "../resources/Connect-Resources/bellIcon.svg";
import chatIcon from "../resources/Connect-Resources/chatIcon.svg";
import plusIcon from "../resources/Connect-Resources/plusIcon.svg";
import gradient from "../resources/tabBar-Resources/gradient.svg";

const firestore = firebase.firestore();
const auth = firebase.auth();

/*following code example from: https://github.com/fireship-io/react-firebase-chat*/

class Connect extends Component {
  state = {
  };

  render() {
    return (
      <div className="connect">
        <Background />

        <ChatRoom />

        <Link to="/messageCenterFriends">
          <img className="connect-chat-icon" src={chatIcon} alt="chat icon"/>
        </Link>

        <div className="global-posts">Global Posts</div>

        <img className="bell-icon" src={bellIcon} alt="bell icon"/>
        <img className="connect-plus-icon" src={plusIcon} alt="plus icon"/>

        <TabBar />

      </div>
    );
  }
}
export default Connect;

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    var today = new Date(),
    time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds(); 

    await messagesRef.add({
      text: formValue,
      createdAt: time,
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="global-messages">
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <img className="gradient" src={gradient} alt="gradient"/>

      <form onSubmit={sendMessage}>
        <input placeholder="type your message..." className="global-chat-box" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  let myProfilePicture = "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80";

  firebase.storage().ref('ProfilePicutres/' + auth.currentUser.uid).getDownloadURL().then(imgURL => {
    myProfilePicture = imgURL;
  }).catch(error => {
    console.log(error)
  })

  return (<>
    <div className={`message ${messageClass}`}>
      <img className="global-chat-profile-picture" src={myProfilePicture} alt="profile pic"/>
      <p14>{text}</p14>
    </div>
  </>)
}


function Background() {
  return (
    <div>
      <div className="green"></div>
      <img className="white" src={whiteBackground} alt="white background" />
      <img className="dots-stars" src={dotsStarsBackground} alt="dots stars background" />
      <h1 className="connect-title">Connect</h1>
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
