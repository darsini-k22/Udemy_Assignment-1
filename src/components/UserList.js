import React from "react";
import Card from "./UI/Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  return (
    <Card className={`${styles["userlist"]}`}>
      <ul>
        {props.userData.map((data) => {
          return (
            <li key={data.id}>
              {data.name} ({data.age} years old)
            </li>
          );
        })}{" "}
      </ul>
    </Card>
  );
}
