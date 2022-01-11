import React, { Fragment } from "react";

const InputFields = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </Fragment>
  );
};
export default InputFields;
