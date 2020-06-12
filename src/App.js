import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Main.css";

// Component
import Header from "./components/Header.component";
import Admin from "./components/Admin.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "admin",
    };
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/admin" component={Admin} />
        <Route path="/" exact component={Header} />
      </Router>
    );
  }
}

export default App;
