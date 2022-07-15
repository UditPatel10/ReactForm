import React, { Component } from "react";
import UserForm from "./components/UserForm";
import "./App.css";
// import { config } from "./Config";
import { PublicClientApplication } from "@azure/msal-browser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {},
    };
    this.login = this.login.bind(this);
    this.publicClientApplication = new PublicClientApplication({
      auth: {
        clientId: "client id azure",
        redirectUrl: "http://localhost:3000/",
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
      },
    });
  }
  async login() {
    try {
      await this.publicClientApplication.loginPopup({
        scopes: ["user.read"],
        prompt: "select_account",
      });
      this.setState({ isAuthenticated: true });
    } catch (err) {
      this.setState({
        error: err,
        isAuthenticated: false,
        user: {},
      });
    }
  }
  logout() {
    this.publicClientApplication.logout();
  }
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;
// {this.state.isAuthenticated ? (
//   <UserForm />
// ) : (
//   <p>
//     <button onClick={() => this.login()}>login</button>
//   </p>
// )}