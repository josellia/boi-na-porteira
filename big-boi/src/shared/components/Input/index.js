import React, { useState } from "react";
import PropTypes from "prop-types";
import { validateInput } from "../../utils/validators";

const Input = (props) => {
  const { value, name, id, label, placeholder, validators, type, onChange } =
    props;
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setError(validateInput(validators, value));
    onChange(value);
  };
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className="text-danger">{error.message}</span>}
    </div>
  );
};

Input.prototypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  type: "text",
  validators: [],
};
export default Input;
