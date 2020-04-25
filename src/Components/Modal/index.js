import React from "react";
import classes from "./Modal.module.scss";

const Modal = ({ show, children }) => {
  return (
    <div className={`${classes.Modal} ${!show && classes.hide}`}>
      {children}
    </div>
  );
};

export default Modal;
