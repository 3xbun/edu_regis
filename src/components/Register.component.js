import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button.component";
import axios from 'axios';

export default class Register extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const year = document.querySelector("#year").value;
    const amount = document.querySelector("#amount").value;

    const entry = {
      name: name,
      year: year,
      amount: amount
    };

    console.log(entry);

    axios.post("http://localhost:4000/api/register", entry)
      .then(res => alert(res.data));

    window.location = '/'
  }

  render() {
    return (
      <div>
        <h1>ลงทะเบียนจองโต๊ะ</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="ชื่อผู้จอง" id="name"/>
          <select id="year" name="year" id="year">
            <option value="1">ปี1</option>
            <option value="2">ปี2</option>
            <option value="3">ปี3</option>
            <option value="4">ปี4</option>
          </select>
          <input type="text" name="amt" placeholder="จำนวน" id="amount"/>
          <input type="submit" />
        </form>

        <Link to="/">
          <Button name="กลับหน้าหลัก" class="btn" />
        </Link>
      </div>
    );
  }
}
