import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { Col, Row } from "reactstrap";
import Select from "react-select";

let insuranceCompanies = [];

function InSureCompanies(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/core/data/companies").then((response) => {
      setData(response.data.result);
    });
  }, []);

  if (data != null) {
    insuranceCompanies = data.map((item) => ({
      label: item.company,
      value: item.id,
    }));
  }

  function onChangeCompany(e) {
    props.onAddInsureCompany(e.label);
  }

  function clickHandler() {
    if (props.company !== "") {
      props.history.push("/discount");
    }
  }

  return (
    <div className="form-area">
      <h3 className="mb-5">بیمه شخص ثالث</h3>
      <p className="text-muted mb-5">
        شرکت بیمه گر قبلی خود را در این بخش وارد کنید.
      </p>
      <Row>
        <Col md="12">
          <Select
            className="form-text"
            options={insuranceCompanies}
            onChange={onChangeCompany}
            placeholder="شرکت بیمه گر قبلی"
            isRtl
          />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <button onClick={clickHandler} className="btn-form float-right mt-5">
            مرحله بعد
            <img
              src="assets/img/arrow.svg"
              className="ml-2"
              alt="arrow"
              height="10"
            />
          </button>
          <Link to={"/car"} className="btn-form float-left mt-5">
            <img
              src="assets/img/arrow.svg"
              className="arrow-change mr-3"
              alt="arrow"
              height="10"
            />
            مرحله قبل
          </Link>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    company: state.insureCompany,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddInsureCompany: (lastinsure) => dispatch({ type: "ADD_INSURECOMPANY", payload: lastinsure }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InSureCompanies);
