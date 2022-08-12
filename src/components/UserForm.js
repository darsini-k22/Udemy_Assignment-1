import React, { useState ,useRef} from "react";
import Wrapper from "../Helpers/Wrapper";
import Card from "./UI/Card";
import ErrorMsgBox from "./UI/ErrorMsgBox";
import styles from "./UserForm.module.css";

export default function UserForm(props) {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [isEmpty, setIsEmpty] = useState("");
  const userNameRef=useRef();
  const userAgeRef=useRef();

  // const nameHandler = (e) => {
  //   setName(e.target.value);
  //   setIsEmpty(false);
  // };

  // const ageHandler = (e) => {
  //   setAge(e.target.value);
  //   setIsEmpty(false);
  // };



  const submitHandler = (e) => {

    e.preventDefault();
    const userName=userNameRef.current.value;
    const userAge=userAgeRef.current.value;
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setIsEmpty({
        title: "Empty Fields",
        message: "Enter Valid Name And Age Resulting In Non-Empty Fields!",
      });
      return;
    }

    if (+userAge < 1) {
      setIsEmpty({
        title: "Invalid Age",
        message: "Set Age Above Number Zero!",
      });
      return;
    }

 

    props.onSubmitUserForm(userName, userAge);
    // setName("");
    // setAge("");

    userNameRef.current.value='';
    userAgeRef.current.value='';
  };

  const errorHandler = () => {
    setIsEmpty(null);
  };
  return (
    <Wrapper>
      {isEmpty && (
        <ErrorMsgBox
          title={isEmpty.title}
          message={isEmpty.message}
          onConform={errorHandler}
        />
      )}
      <Card className={`${styles["form-card"]}`}>
        <form onSubmit={submitHandler}>
          <div>
            <label>Username</label>
            <input type="text" ref={userNameRef}></input>
          </div>
          <div>
            <label>Age (Years)</label>
            <input type="number"  ref={userAgeRef}></input>
          </div>
          <div className="pt-3">
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
}
