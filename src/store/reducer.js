const initialState = {
  fullName: "",
  carType: "",
  carModel: "",
  insureCompany: "",
  thirdDiscount: "",
  driverDiscount: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FULLNAME":
      return {
        ...state,
        fullName: action.payload,
      };
    case "ADD_CARTYPE":
      return {
        ...state,
        carType: action.payload,
      };
      case "ADD_CARMODEL":
      return {
        ...state,
        carModel: action.payload,
      };
      case "ADD_INSURECOMPANY":
      return {
        ...state,
        insureCompany: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
