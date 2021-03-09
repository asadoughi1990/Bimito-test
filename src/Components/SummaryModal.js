import React from "react";
import { connect } from "react-redux";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const SummaryModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.modalClose} toggle={props.modalToggle}>
        <ModalHeader toggle={props.modalToggle}>اطلاعات شما</ModalHeader>
        <ModalBody>
          <p>نام و نام خانوادگی: {props.fName}</p>
          <p>شماره موبایل: {props.Mobile}</p>
          <p>نوع خودرو: {props.carType}</p>
          <p>مدل خودرو: {props.carModel}</p>
          <p>شرکت بیمه گر قبلی: {props.insureCompany}</p>
          <p>درصد تخفیف ثالث: {props.dicountThird}</p>
          <p>درصد تخفیف حوادث راننده: {props.discountDriver}</p>
        </ModalBody>
        <ModalFooter>
          <button className="btn-form" onClick={props.modalToggle}>
            بستن
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fName: state.fullName,
    Mobile: state.mobileNumber,
    carType: state.carType,
    carModel: state.carModel,
    insureCompany: state.insureCompany,
    dicountThird: state.thirdDiscount,
    discountDriver: state.driverDiscount,
  };
};

export default connect(mapStateToProps)(SummaryModal);
