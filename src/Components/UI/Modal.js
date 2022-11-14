import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
const portalhelper = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {/* <Backdrop />
        <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(<Backdrop />, portalhelper)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalhelper
      )}
    </React.Fragment>
  );
}

export default Modal;
