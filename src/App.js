import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Main.css";

// Component
import Header from "./components/Header.component";
import Register from "./components/Register.component";
import Payment from "./components/Payment.component";
import Status from "./components/Status.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />

          <Route path="/" exact>
            <h1>
              โปรแกรมสำรองที่นั่งสุดเทพ
            </h1>
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/payment_confirmation" component={Payment} />
          <Route path="/status" component={Status} />
          
        </div>
        {/* <Route path="/create" component={CreateTodo} /> */}
      </Router>
    );
  }
}

export default App;
