import React from "react";
import { connect } from "react-redux";

import Navbar from "react-bootstrap/Navbar";

function navbar(props) {

  let login = null;
  if (props.fName !== "") {
    login = (
      <div>
        <img src="assets/img/user.svg" alt="logo" height="20" />
        <span className="login-name ml-2">{props.fName}</span>
      </div>
    );
  } else {
    login = "ثبت نام";
  }

  return (
    <div id="navbar">
      <Navbar>
        <Navbar.Brand>
          <img src="assets/img/logo.svg" alt="logo" height="25" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="title justify-content-end">
          سامانه مقایسه و خرید آنلاین بیمه
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {login}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fName: state.fullName,
  };
};

export default connect(mapStateToProps)(navbar);
