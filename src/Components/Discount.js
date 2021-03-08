import React, { useEffect, useState } from "react";
import axios from "axios";

import { Col, Row } from "reactstrap";
import Select from "react-select";

let discountRates = [];

function Discount() {
  const [data, setData] = useState([]);

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
    console.log(e.label);
  }

  function onChangeDriver(e) {
    console.log(e.label);
  }

  return (
    <div className="form-area">
      <h3 className="mb-5">بیمه شخص ثالث</h3>
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
          <button className="btn-register mt-4 float-right">
            استعلام قیمت
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default Discount;
