import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button.component";

export default class Payment extends Component {
  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
  };

  render() {
    return (
      <div>
        <h1>ส่งหลักฐานการชำระเงิน</h1>
        <form action="">
          <input type="file" name="file" onChange={this.onChangeHandler} />
          <input type="submit" value="ตกลง"/>
        </form>

        <Link to="/">
            <Button name="กลับหน้าหลัก" class="btn" />
        </Link>
      </div>
    );
  }
}
