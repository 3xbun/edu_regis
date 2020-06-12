import React, { Component } from "react";
import Button from "./Button.component";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div id="admin">
        <div className="container">
          
          <h1>Admin Page</h1>

          <hr/>
          <table>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Amount</th>
              <th>Confirmation</th>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>Year 1</td>
              <td>5</td>
              <td>✗</td>
            </tr>
            <tr>
              <td>Someone Doe</td>
              <td>Year 2</td>
              <td>2</td>
              <td>
                <a href="#">view</a>
              </td>
            </tr>
            <tr>
              <td>Jane Orange</td>
              <td>Year 1</td>
              <td>10</td>
              <td>✗</td>
            </tr>
            <tr>
              <td>Harry Potter</td>
              <td>Alumni</td>
              <td>12</td>
              <td>
                <a href="#">view</a>
              </td>
            </tr>
            <tr>
              <td>King Queen</td>
              <td>Alumni</td>
              <td>1</td>
              <td>
                <a href="#">view</a>
              </td>
            </tr>
          </table>

          <a className="btn" href="/">
            กลับหน้าหลัก
          </a>
        </div>
      </div>
    );
  }
}
