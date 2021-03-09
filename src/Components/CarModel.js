import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { Col, Row } from "reactstrap";
import Select from "react-select";

let carTypes = [];
let carModels = [];

function CarModel(props) {
  const [data, setData] = useState([]);
  const [cartypeval, setcartypeval] = useState(0);

  useEffect(() => {
    axios.get("/core/data/third-car-types").then((response) => {
      setData(response.data.result);
    });
  }, []);

  if (data != null) {
    carTypes = data.map((item) => ({
      label: item.carType,
      value: item.carTypeID,
    }));
  }

  function onChangeTypes(e) {
    setcartypeval(e.value);
    props.onAddCarType(e.label);
  }

  function onChangeModels(e) {
    props.onAddCarModel(e.label);
  }

  function filterCarModels() {
    const SelectedCarModels = data.filter(
      (dates) => dates.carTypeID === cartypeval
    );
    carModels = SelectedCarModels[0]?.brand.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return carModels;
  }

  function clickHandler() {
    if (props.model !== "") {
      props.history.push("/insure-company");
    }
  }

  return (
    <div className="form-area">
      <h3 className="mb-5">بیمه شخص ثالث</h3>
      <p className="text-muted mb-5">نوع و مدل خودرو خود را انتخاب کنید.</p>
      <Row>
        <Col md="6">
          <Select
            className="form-text"
            options={carTypes}
            onChange={onChangeTypes}
            placeholder="نوع خودرو"
            isRtl
          />
        </Col>
        <Col md="6">
          <Select
            className="form-text"
            options={filterCarModels()}
            onChange={onChangeModels}
            placeholder="مدل خودرو"
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
          <Link to={"/insure-select"} className="btn-form float-left mt-5">
            <img
              src="assets/img/arrow.svg"
              className="arrow-change mr-3"
              alt="arrow"
              height="10"
            />
            بازگشت
          </Link>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    model: state.carModel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCarType: (type) => dispatch({ type: "ADD_CARTYPE", payload: type }),
    onAddCarModel: (model) =>
      dispatch({ type: "ADD_CARMODEL", payload: model }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarModel);
