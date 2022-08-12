import React from "react";
import NewUser from "./NewUser";


export default function User(props) {
  // const userData=useState('');
  const submitHandler = (data) => {
   console.log(data);
  };

  return (
    <>
      <NewUser onSubmitUser={submitHandler} />
     
    </>
  );
}
