import React, { Fragment } from "react";
import "./styles.scss";

const Button = ({ text, disable }) => {
  return (
    <>
      <button>{text}</button>
    </>
  );
};

export default Button;
