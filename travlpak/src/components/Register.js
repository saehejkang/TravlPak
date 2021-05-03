import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../css/Register.css";
import fire from '../firebase.js'

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
    let lName = this.state.lastName
    let fName = this.state.firstName

    var db = fire.firestore();

    db.collection("Users").add({
      Email: email,
      FirstName: fName,
      LastName: lName
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
   });

    db.collection("Users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
  });
    console.log(email + " " + password)
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // Send verification email
        this.firebase_sendVerification(user);

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

  render() {
    const imageUrl = "https://picsum.photos/200";
    return (
      <div className="Register">
        <div className="p-5 text-center bg-white">
          <h1>Create Account</h1>
          <img src={imageUrl} alt="" />
        </div>
        <Form onSubmit={this.firebase_signup}>
          <Form.Group size="lg" controlId="last">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={this.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="first">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={this.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={this.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={this.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group>
          <Button
            block
            size="lg"
            className="btn btn-success"
            type="submit"
            disabled={!this.validateForm()}
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
export default Register;