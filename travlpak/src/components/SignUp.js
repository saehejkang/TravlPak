import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import "../css/SignUp.css";

import fire from '../firebase.js'
import createAccIcon from "../resources/SignUp-Resources/createAccIcon.svg";
import exitIcon from "../resources/SignUp-Resources/exitIcon.svg";
import signUpButton from "../resources/SignUp-Resources/signUp.svg";
import signUpButtonDisabled from "../resources/SignUp-Resources/signUpDisabled.svg";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verified: false,
  };

  validateForm() {
    return (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  firebase_signup = () => {
    let email = this.state.email
    let password  = this.state.password
    
    console.log(email + " " + password)
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // Send verification email
        this.firebase_addUser(user);
        this.firebase_sendVerification(user);
        this.setState({verified: true})
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
            alert('That email is taken. Try another.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
    });
  }

  firebase_sendVerification = (user) => {

    user.sendEmailVerification().then(function() {
        // Email sent.
    }).catch(function(error) {
        // An error happened.
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
    });
  }

  firebase_addUser = (user) => {
    let lName = this.state.lastName
    let fName = this.state.firstName

    var db = fire.firestore();

    db.collection("Users").doc(user.uid).set({
      Email: user.email,
      FirstName: fName,
      LastName: lName,
      Location: "",
      bio: "",
      age: 0,
      interests: []
    })
    .then(() => {
      console.log("Document written with ID: ", user.uid);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
   });

    db.collection("Users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
   });
}

  render() {
    if (this.state.verified)
      return (<Redirect to='/success'/>);

    return (
      <div className="sign-up">
        <img className="create-account-icon" src={createAccIcon} alt="create account icon" />
        <Link to={"/login"}>
          <img className="exit-icon" src={exitIcon} alt="exit icon"/>
        </Link>

        <input placeholder="first name" className="first-name-box" type="text" value={this.firstName} onChange={(e) => this.setState({ firstName: e.target.value })}/>
        <input placeholder="last name" className="last-name-box" type="text" value={this.lastName} onChange={(e) => this.setState({ lastName: e.target.value })}/>
        <input placeholder="e-mail address" className="email-box" type="email" value={this.email} onChange={(e) => this.setState({ email: e.target.value })}/>
        <input placeholder="password" className="password-box" type="password" value={this.password} onChange={(e) => this.setState({ password: e.target.value })}/>

        <div className="almost-there">almost there...</div>
        
        <img className="sign-up-button" src={this.validateForm() ? signUpButton : signUpButtonDisabled} alt="sign up button" onClick={this.validateForm() ? this.firebase_signup : null}/>
      </div>
    );
  }
}
export default SignUp;
