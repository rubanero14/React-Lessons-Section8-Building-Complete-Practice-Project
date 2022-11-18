import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  let [userName, setUserName] = useState("");
  let [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    const data = {
      userName: setUserName(event.target.value),
      age: setAge(event.target.value),
    };
    console.log(data);
  };
  /* 
    className can be renamed anything like classes or styles, and passed down into child Card component and access there using 
    props."whatever key name you set here on props", but im choosing className just to be semanctically correct
  */
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={addUserHandler}
          value={userName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" onChange={addUserHandler} value={age} />
        <button type="submit">submit</button>
      </form>
    </Card>
  );
};

export default AddUser;
