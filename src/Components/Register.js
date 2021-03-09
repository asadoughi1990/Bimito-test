import React from "react";
import { connect } from "react-redux";

import { FormGroup, FormFeedback, Input, Col, Row } from "reactstrap";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

function Register(props) {
  const initialValues = {
    id: 0,
    name: "",
    family: "",
    mobilenumber: "",
    password: "",
  };

  // Form Validation Schema
  const characters = /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/;
  const phoneRegExp = /^(9|09)(12|19|35|36|37|38|39|32|21|22|33|91|10|01|30|03|16)\d{7}$/;
  const passwordConfirmation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,10}$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("نام باید دارای مقدار باشد")
      .matches(characters, "نام باید از حروف فارسی باشد"),
    family: Yup.string()
      .required("نام خانوادگی باید دارای مقدار باشد")
      .matches(characters, "نام خانوادگی باید از حروف فارسی باشد"),
    mobilenumber: Yup.string()
      .required("شماره موبایل باید دارای مقدار باشد")
      .matches(phoneRegExp, "شماره موبایل معتبر نمی باشد"),
    password: Yup.string()
      .required("رمز عبور باید دارای مقدار باشد")
      .matches(
        passwordConfirmation,
        "رمز عبور از ﺣﺪاﻗﻞ ﯾﮏ ﻋﺪد ﺣﺪاﻗﻞ ﯾﮏ ﺣﺮف ﻻﺗﯿﻦ ﺑﺰرگ و ﺣﺪاﻗﻞ ﯾﮏ ﺣﺮف ﻻﺗﯿﻦ ﮐﻮﭼﮏ ﺗﺸﮑﯿﻞ ﺷﺪه ﺑﺎﺷﺪ و طﻮل آن حداقل 4 و حداکثر 10 کاراکتر باشد."
      ),
  });

  function onSubmit(fields) {
    const fullName = fields.name + " " + fields.family;
    props.onAddFullname(fullName);
    props.onAddMobileNumber(fields.mobilenumber);
    props.history.push("/insure-select");
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => {
        return (
          <div className="form-area">
            <h3 className="page-title mb-5">ثبت نام</h3>
            <Form>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Input
                      className="form-text"
                      type="text"
                      name="name"
                      placeholder="نام"
                      tag={Field}
                      invalid={errors.name && touched.name}
                    />
                    <FormFeedback tooltip>{errors.name}</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Input
                      className="form-text"
                      type="text"
                      name="family"
                      placeholder="نام خانوادگی"
                      tag={Field}
                      invalid={errors.family && touched.family}
                    />
                    <FormFeedback tooltip>{errors.family}</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <Input
                      className="form-text"
                      type="text"
                      name="mobilenumber"
                      placeholder="شماره موبایل"
                      tag={Field}
                      invalid={errors.mobilenumber && touched.mobilenumber}
                    />
                    <FormFeedback tooltip>{errors.mobilenumber}</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Input
                      className="form-text"
                      type="password"
                      name="password"
                      placeholder="رمز عبور"
                      tag={Field}
                      invalid={errors.password && touched.password}
                    />
                    <FormFeedback tooltip>{errors.password}</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="12">
                  <FormGroup>
                    <button
                      type="submit"
                      className="btn-register mt-3"
                    >
                      ثبت نام
                    </button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddFullname: (fullName) =>
      dispatch({ type: "ADD_FULLNAME", payload: fullName }),
    onAddMobileNumber: (mobile) =>
      dispatch({ type: "ADD_MOBILE", payload: mobile }),
  };
};

export default connect(null, mapDispatchToProps)(Register);
