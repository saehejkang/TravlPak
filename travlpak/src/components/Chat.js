import "../css/Chat.css";

import { Link } from "react-router-dom";
import { Component } from "react";

import exampleRecieved from "../resources/Chat-Resources/exampleRecieved.svg";
import exampleSent from "../resources/Chat-Resources/exampleSent.svg";

class Chat extends Component {
    state = {
        chatRecipient: "Annie Spratt",
        MyProfilePic: "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
        RecipientProfilePic: "https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1148&q=80",
        message: "",
    };

    render() {
        return (
            <div className="chat-page">
                <svg width="414" height="132" viewBox="0 0 414 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="414" height="132" fill="#BDCAC2"/>
                </svg>
                <Link to="/messageCenterFriends">
                    <div className="back-to-message-center">
                        <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 22L1 11.5L11 1" stroke="#424D47" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </Link>

                <Link to="/profile">
                    <text className="chat-name">{this.state.chatRecipient}</text>
                </Link>
                
                <img className="example-profile-pic1" src={this.state.RecipientProfilePic} alt="example profile pic recipient"/>
                <img className="example-recieved" src={exampleRecieved} alt="example recieved chat"/>
                <img className="example-profile-pic2" src={this.state.MyProfilePic} alt="example profile pic"/>
                <img className="example-sent" src={exampleSent} alt="example sent chat"/>
                <input placeholder="type your message..." className="chat-box" type="text" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })}/>
            </div>
        );
    }
}
export default Chat;