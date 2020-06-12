import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button.component";
import axios from "axios";

export default class Check extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      entry: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const name = document.querySelector("#name").value;

    console.log(name);

    e.preventDefault();

    axios.get(`http://localhost:4000/api/register/search/${name}`)
      .then((res) => {this.setState({entry: res.data})})
      .catch(err => {
        this.setState({entry: {conf: 'error'}})
        console.log(err)
      });
  }

  render() {
    return (
      <div>
        <h1>ตรวจสอบสถานะการจอง</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="status" placeholder="Name" id="name" />
          <input type="submit" value="ตกลง"/>
        </form>

        <p className="status">{this.state.entry.conf ? "ยืนยันแล้ว" : "ยังไม่ได้จ่ายเงิน"}</p>

        <Link to="/">
          <Button name="กลับหน้าหลัก" class="btn" />
        </Link>
      </div>
    );
  }
}
