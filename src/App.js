import React, { Component } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import "./Main.css";

// Component
import Admin from "./components/Admin.component";
import Home from "./components/Home.component";
import Header from "./components/Header.component";
import Register from "./components/Register.component";
import Payment from "./components/Payment.component";
import Status from "./components/Status.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "admin",
      password: "password",
      isAdmin: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    e.preventDefault();

    if (username === this.state.username && password === this.state.password) {
      this.setState({isAdmin: true})
      alert("Authenticated!");
    }
    
  }

  render() {
    return (
      // <Router>
      <div>
        <Route path="/admin">
          {this.state.isAdmin ? <Admin /> : <Redirect to="/login" />}
        </Route>

        <Route path="/">
          <Header />
          <div className="container">
            <Route path="/login">
              <h1>Login</h1>
              <form onSubmit={this.handleSubmit}>
                <input id="username" type="text" placeholder="username"/>
                <input id="password" type="password" placeholder="password"/>
                
                <input type="submit" value="Login"/>
                {this.state.isAdmin ? <Link to="/admin">Admin tools</Link> : ""}
              </form>
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/payment_confirmation" component={Payment} />
            <Route path="/status" component={Status} />
          </div>
        </Route>
      </div>
    );
  }
}

export default App;
