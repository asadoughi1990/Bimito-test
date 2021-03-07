import React from "react";

function insureSelect() {
  return (
    <div className="form-area">
      <h3 className="mb-5">انتخاب بیمه</h3>
      <button className="btn-insurance float-left">
        <img src="assets/img/insurance.svg" alt="insurance-type" height="50" />
        <h6 className="mt-3">شخص ثالث</h6>
      </button>
      <div className="btn-overlay">
        <button className="btn-body float-left ml-4" disabled>
          <img
            src="assets/img/insurance.svg"
            alt="insurance-type"
            height="50"
          />
          <h6 className="mt-3">بدنه</h6>
        </button>
      </div>
    </div>
  );
}

export default insureSelect;
