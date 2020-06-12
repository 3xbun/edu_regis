import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Main.css";

// Component
import Header from "./components/Header.component";
import Register from "./components/Register.component";
import Payment from "./components/Payment.component";
import Status from "./components/Status.component";
import Admin from "./components/Admin.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: window.location.href
    };
  }

  render() {
    if (window.location.pathname === "/admin") {
      return <Admin />;
    } else
      return (
        <Router>
          <Route path="/admin" component={Admin} />
          <Header />
          <div className="container">
            <Route path="/" exact>
              <h1>โปรแกรมสำรองที่นั่งสุดเทพ</h1>
              {this.base_url}
            </Route>
            <Route path="/register" component={Register} />
            <Route path="/payment_confirmation" component={Payment} />
            <Route path="/status" component={Status} />
          </div>
        </Router>
      );
  }
}

export default App;
