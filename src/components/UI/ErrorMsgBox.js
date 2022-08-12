import React from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
import styles from "./ErrorMsgBox.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onConform} className={`${styles["error-bg"]}`} />;
};
const ErrorBox = (props) => {
  return (
    <Card className={`${styles["card"]}`}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div className={`${styles["error-msg"]}`}>{props.message}</div>
      <footer>
        <button onClick={props.onConform}>Okay</button>
      </footer>
    </Card>
  );
};

export default function ErrorMsgBox(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConform={props.onConform} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ErrorBox
          title={props.title}
          message={props.message}
          onConform={props.onConform}
        />,
        document.getElementById("error-root")
      )}
    </React.Fragment>
  );
}
