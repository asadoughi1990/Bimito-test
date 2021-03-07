import React from "react";

import Navbar from "react-bootstrap/Navbar";

function navbar() {
  return (
    <div id="navbar">
      <Navbar>
        <Navbar.Brand>
          <img src="assets/img/logo.svg" alt="logo" height="25" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="title">
          سامانه مقایسه و خرید آنلاین بیمه
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          ثبت نام
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navbar;
