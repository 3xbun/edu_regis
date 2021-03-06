import React from "react";
import Button from "./Button.component";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div>
        <header>
          <div className="container">
            <Link to="/">
              <img
                className="logo"
                src="http://edu2.ku.ac.th/event62/img/logo3.png"
                alt="logo"
              />
            </Link>
            <nav>
              <Link to={`/register`}>
                <Button name="สำรองโต๊ะ" class="register btn" />
              </Link>
              <ul className="navbar">
                <li>
                  <Link to={`/payment_confirmation`}>
                    <Button name="ส่งหลักฐานการชำระเงิน" class="btn" />
                  </Link>
                </li>
                <li>
                  <Link to={`/status`}>
                    <Button name="ตรวจสอบสถานะ" class="btn" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }

export default Header;