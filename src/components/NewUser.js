import React from "react";
import UserForm from "./UserForm";

export default function NewUser(props) {
  const userSubmitFormHandler = (name, age) => {
    props.onSubmitForm(name,age);
  };

  return <UserForm onSubmitUserForm={userSubmitFormHandler} />;
}
