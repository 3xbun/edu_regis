import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button.component";

export default class Register extends Component {
  render() {
    return (
      <div>
        <h1>ลงทะเบียนจองโต๊ะ</h1>
        <input type="text" name="name" placeholder="ชื่อผู้จอง" />
        <select id="year" name="year">
          <option value="1">ปี1</option>
          <option value="2">ปี2</option>
          <option value="3">ปี3</option>
          <option value="4">ปี4</option>
        </select>
        <input type="text" name="amt" placeholder="จำนวน" />
        <input type="submit" />

        <Link to="/">
            <Button name="กลับหน้าหลัก" class="btn" />
        </Link>
      </div>
    );
  }
}
