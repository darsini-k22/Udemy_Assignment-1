import { useState } from "react";
import "./App.css";
import NewUser from "./components/NewUser";

import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([
  ]);

  const submitHandler = (name, age) => {
    setUserList((prevUser) => {
      return [
        ...prevUser,
        { name: name, age: age, id: "user" + Math.floor(Math.random().toString() * 100) },
      ];
    });
  };

  return (
    <div>
      <NewUser onSubmitForm={submitHandler} />
      <UserList userData={userList} />
      
    </div>
  );
}

export default App;
