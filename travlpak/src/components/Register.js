import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Register.css";

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

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting...");
  }
  render() {
    const imageUrl = "https://picsum.photos/200";
    return (
      <div className="Register">
        <div className="p-5 text-center bg-white">
          <h1>Create Account</h1>
          <img src={imageUrl} alt="" />
        </div>
        <Form onSubmit={this.handleSubmit}>
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
          <Link to={"/registerSuccess"}
            block
            size="lg"
            className="btn btn-success"
            type="submit"
            disabled={!this.validateForm()}
          >
            Login
          </Link>
        </Form>
      </div>
    );
  }
}
export default Register;
