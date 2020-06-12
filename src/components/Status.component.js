import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button.component";

export default class Check extends Component {
  render() {
    return (
      <div>
        <h1>ตรวจสอบสถานะการจอง</h1>
        <form action="">
          <input type="text" name="status" placeholder="Phone No." />
          <input type="submit" value="ตกลง"/>
        </form>

        <Link to="/">
          <Button name="กลับหน้าหลัก" class="btn" />
        </Link>
      </div>
    );
  }
}
