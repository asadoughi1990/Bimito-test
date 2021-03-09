import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { Col, Row } from "reactstrap";
import Select from "react-select";
import SummaryModal from "./SummaryModal";

let discountRates = [];

function Discount(props) {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios.get("/core/data/car-third-discount").then((response) => {
      setData(response.data.result);
    });
  }, []);

  if (data != null) {
    discountRates = data.map((item) => ({
      label: item.title,
      value: item.id,
    }));
  }

  function onChangeThird(e) {
    props.onAddThirdDiscount(e.label);
  }

  function onChangeDriver(e) {
    props.onAddDriverDiscount(e.label);
  }

  const toggle = () => {
    if (props.dicountThird !== "" && props.discountDriver !== "") {
      setModal(!modal);
    }
  };

  return (
    <React.Fragment>
      <SummaryModal modalClose={modal} modalToggle={toggle} />
      <div className="form-area">
        <h3 className="page-title mb-5">بیمه شخص ثالث</h3>
        <p className="text-muted mb-5">
          درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.
        </p>
        <Row>
          <Col md="12">
            <Select
              className="form-text"
              options={discountRates}
              onChange={onChangeThird}
              placeholder="درصد تخفیف ثالث"
              isRtl
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="12">
            <Select
              className="form-text"
              options={discountRates}
              onChange={onChangeDriver}
              placeholder="درصد تخفیف حوادث راننده"
              isRtl
            />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <button onClick={toggle} className="btn-register mt-4">
              استعلام قیمت
            </button>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    dicountThird: state.thirdDiscount,
    discountDriver: state.driverDiscount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddThirdDiscount: (discount) =>
      dispatch({ type: "ADD_THIRD_DISCOUNT", payload: discount }),
    onAddDriverDiscount: (discount) =>
      dispatch({ type: "ADD_DRIVER_DISCOUNT", payload: discount }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discount);
