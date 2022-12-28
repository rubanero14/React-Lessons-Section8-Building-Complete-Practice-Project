// import React to enable component to use JSX codes
import React from "react";
import Card from "../UI/Card";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.userName + user.age}>
            {user.id} {user.userName} ({user.age} years old!)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
