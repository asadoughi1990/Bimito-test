import React from "react";

import { Formik, Field, Form } from "formik";
import { FormGroup, Col, Row } from "reactstrap";

import SelectField from "../Utility/SelectField";

function CarModel() {
  const initialValues = {
    id: 0,
    carType: "",
    carModel: "",
  };

  function onSubmit() {
    console.log("MMMMMMMMMMMMMMMMMMM");
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <div className="form-area">
        <h3 className="mb-5">بیمه شخص ثالث</h3>
        <p className="text-muted mb-5">نوع و مدل خودرو خود را انتخاب کنید.</p>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Field
                  name="carType"
                  component={SelectField}
                  placeholder="نوع خودرو"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  name="carModel"
                  component={SelectField}
                  placeholder="مدل خودرو"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <button type="submit" className="btn btn-primary float-right mt-3">
                  ادامه
                </button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </Formik>
  );
}

export default CarModel;
