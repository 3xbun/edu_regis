import React, { Component } from "react";
import Button from "./Button.component";
import { Link } from "react-router-dom";
import axios from "axios";

const Entry = props => (
  <tr>
    <td>{props.entry.name}</td>
    <td>{props.entry.year}</td>
    <td>{props.entry.amount}</td>
    {props.entry.conf ? <td>view</td> : <td>✗</td>}
  </tr>
)

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      reservation: [] 
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/register")
      .then((res) => {this.setState({reservation: res.data})})
      .catch(err => console.log(err));
  }

  reservationList() {
    return this.state.reservation.map(entry => {
      return <Entry entry={entry} />
    })
  }

  render() {
    return (
      <div id="admin">
        <div className="container">
          <h1>Admin Tools</h1>

          <hr />
          <table>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Amount</th>
              <th>Confirmation</th>
            </tr>
            {this.reservationList()}
          </table>

          <p>{ this.state.reservation.id }</p>

          <Link to={`/`}>
            <Button name="Logout" class="btn" />
          </Link>
        </div>
      </div>
    );
  }
}
