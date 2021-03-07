import React from "react";
import Select from "react-select";
import { useField } from "formik";

const customStyles = {

  option: (provided, state) => ({
    ...provided,
    borderBottom: "0px dotted pink",
    color: state.isSelected ? "1ABC9C" : "#424f5e",
    padding: "0",
    margin: "5px",
  }),
  control: (provided, state) => ({
    ...provided,
    height: "38px",
    "min-height": "38px",
    boxShadow: state.isFocused ? 0 : 0,
    borderColor: state.isFocused ? "#1ABC9C" : provided.borderColor,
    "&:hover": { borderColor: "#1ABC9C" },
    margin: 0,
    "font-size": "13px",
  }),
  menu: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: 0,
    "font-size": "13px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "33px",
  }),
  input: (provided, state) => ({
    ...provided,
    height: "28px",
  }),
};

function SelectField(props) {
  const [field, { setValue, setTouched }] = useField(props.field.name);
  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <Select
      {...props}
      onChange={onChange}
      onBlur={setTouched}
      styles={customStyles}
      value={
        props.options
          ? props.options.find((option) => option.value === field.value)
          : ""
      }
      isRtl
    />
  );
}

export default SelectField;
